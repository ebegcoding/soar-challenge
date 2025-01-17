import { TransactionsList } from "@/components/organisms";
import { DashboardCard } from "../dashboard-card";
import { useGetTransactionsQuery } from "@/features/transactions/transactions.slice";
import { useFetchMore } from "@/hooks/use-fetch-more";
import { useCallback } from "react";

export const TransactionsCard = () => {
  const [limit, setLimit] = useFetchMore(5);

  const { data = [], isFetching } = useGetTransactionsQuery({
    limit,
    sort: "date",
    order: "DESC",
  });

  const handleFetchMore = useCallback(() => {
    setLimit(data.length);
  }, [data.length]);

  return (
    <DashboardCard
      title="Recent Transactions"
      area="transactions"
      minHeight="214px"
    >
      <TransactionsList
        data={data}
        loading={isFetching}
        onFetchMore={handleFetchMore}
      />
    </DashboardCard>
  );
};
