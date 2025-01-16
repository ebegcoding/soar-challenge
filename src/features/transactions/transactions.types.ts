export enum TransactionDirection {
  INCOMING = "INCOMING",
  OUTGOING = "OUTGOING",
}

export enum TransactionType {
  BILL = "BILL",
  ENT = "ENT",
  INVESTMENT = "INVESTMENT",
  OTHER = "OTHER",
}

export type Transaction = {
  id: number;
  title: string;
  amount: number;
  direction: TransactionDirection;
  type: TransactionType;
  date: string;
};

export type TransactionInput = Pick<Transaction, "title" | "amount" | "type">;

export type TransactionApiRequestQuery = {
  limit: number;
  sort?: keyof Transaction | `-${keyof Transaction}`;
};
