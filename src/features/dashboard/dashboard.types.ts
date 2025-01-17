import {
  TransactionDirection,
  TransactionType,
} from "@/interfaces/transactions";

export type ContactApiRequestQuery = {
  limit: number;
};

export type Contact = {
  id: number;
  name: string;
  position: string;
  avatar: string;
};

export type BalanceProgression = {
  month: string;
  value: number;
};

export type ExpenseStatsApiResponse = Record<TransactionType, number>;

export type WeeklyActivity = {
  days: string[];
} & Record<TransactionDirection, number[]>;
