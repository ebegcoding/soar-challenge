import { apiSlice } from "@/app/api";
import { RTKQueryTag } from "@/constants/rtk";

import { PaginatedQueryParams, SortQueryParams } from "@/interfaces/api";
import {
  BalanceProgression,
  Contact,
  ContactApiRequestQuery,
  ExpenseStatsApiResponse,
} from "./dashboard.types";
import {
  Transaction,
  TransactionDirection,
  TransactionType,
} from "@/interfaces/transactions";
import { monthsMap } from "./dashboard.constants";

const extendedApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getContacts: builder.query<Contact[] | undefined, ContactApiRequestQuery>({
      query: ({ limit }) => ({
        url: "contacts",
        params: {
          _page: 1,
          _limit: limit,
        } satisfies PaginatedQueryParams,
      }),
      providesTags: [RTKQueryTag.CONTACTS],
    }),

    getBalanceProgression: builder.query<
      BalanceProgression[] | undefined,
      void
    >({
      query: () => ({
        url: "balanceProgression",
        params: {
          _sort: "month",
          _order: "ASC",
        } satisfies SortQueryParams,
      }),
      providesTags: [RTKQueryTag.BALANCE_PROGRESSION],
      transformResponse: (response: BalanceProgression[]) =>
        response.map(({ month, value }) => {
          const _month = month.split("-")[1] as keyof typeof monthsMap;

          return { value, month: monthsMap[_month] };
        }),
    }),

    getWeeklyActivity: builder.query<Transaction[] | undefined, void>({
      query: () => ({
        url: "transactions",
      }),
      providesTags: [RTKQueryTag.WEEKLY_ACTIVITY],
    }),

    getExpenseStats: builder.query<ExpenseStatsApiResponse | undefined, void>({
      query: () => ({
        url: "transactions",
        params: {
          direction: TransactionDirection.OUTGOING,
        } satisfies Pick<Transaction, "direction">,
      }),
      providesTags: [RTKQueryTag.EXPENSE_STATS],
      transformResponse: (response: Transaction[]) => {
        const stats = {} as ExpenseStatsApiResponse;

        for (const transaction of response) {
          stats[transaction.type] = (stats[transaction.type] ?? 0) + 1;
        }

        for (const key in stats) {
          stats[key as TransactionType] =
            (stats[key as TransactionType] / response.length) * 100;
        }

        return stats;
      },
    }),
  }),
});

export const {
  useGetBalanceProgressionQuery,
  useGetContactsQuery,
  useGetExpenseStatsQuery,
  useGetWeeklyActivityQuery,
} = extendedApiSlice;
