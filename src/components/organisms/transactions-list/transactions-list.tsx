import { Transaction } from "@/interfaces/transactions";
import { VirtualizedList, VirtualizedListFooter } from "../virtualized-list";

export const TransactionsList = ({
  data,
  onFetchMore,
  loading = false,
}: {
  data: Transaction[];
  onFetchMore: () => void;
  loading?: boolean;
}) => {
  return (
    <VirtualizedList
      stateKey="transactions"
      data={data}
      context={{ loading }}
      itemContent={(_index, data) => <TransactionListItem {...data} />}
      increaseViewportBy={200}
      endReached={onFetchMore}
      components={{ Footer: VirtualizedListFooter }}
    />
  );
};

const TransactionListItem = ({ title }: Transaction) => {
  return <div>{title}</div>;
};
