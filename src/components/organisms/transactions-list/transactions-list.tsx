import { Transaction, TransactionDirection } from "@/interfaces/transactions";
import { VirtualizedList, VirtualizedListFooter } from "../virtualized-list";
import { Avatar } from "@/components/atoms";
import {
  StyledAmount,
  StyledDetails,
  StyledTransactionItem,
  StyledTransactionTitle,
} from "./transactions-list.styles";

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
      gap="10px"
      data={data}
      context={{ loading }}
      itemContent={(_index, data) => <TransactionListItem {...data} />}
      increaseViewportBy={200}
      endReached={onFetchMore}
      components={{ Footer: VirtualizedListFooter }}
    />
  );
};

const TransactionListItem = ({
  title,
  date,
  direction,
  amount,
}: Transaction) => {
  const incoming = direction === TransactionDirection.INCOMING;
  return (
    <StyledTransactionItem>
      <Avatar size="50px" username={title} />
      <StyledDetails>
        <StyledTransactionTitle>{title}</StyledTransactionTitle>
        {new Date(date).toDateString()}
      </StyledDetails>
      <StyledAmount $positive={incoming}>
        {incoming ? "+" : "-"}
        {Intl.NumberFormat("en", {
          style: "currency",
          currency: "USD",
          minimumFractionDigits: 2,
        }).format(amount)}
      </StyledAmount>
    </StyledTransactionItem>
  );
};
