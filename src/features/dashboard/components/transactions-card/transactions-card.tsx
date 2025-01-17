import { TransactionsList } from "@/components/organisms";
import { DashboardCard } from "../dashboard-card";
import { useGetTransactionsQuery } from "@/features/transactions/transactions.slice";
import { useFetchMore } from "@/hooks/use-fetch-more";
import { useCallback } from "react";

export const TransactionsCard = () => {
  const [limit, setLimit] = useFetchMore(5);

  const {
    data = [],
    isFetching,
    isLoading,
  } = useGetTransactionsQuery({ limit, sort: "date", order: "DESC" });

  const handleFetchMore = useCallback(() => {
    setLimit(data.length);
  }, [data.length]);

  if (isLoading) {
    return <div>Loading</div>;
  }

  return (
    <DashboardCard title="Recent Transactions" area="transactions">
      <TransactionsList
        data={data}
        loading={isFetching}
        onFetchMore={handleFetchMore}
      />
    </DashboardCard>
  );
};
