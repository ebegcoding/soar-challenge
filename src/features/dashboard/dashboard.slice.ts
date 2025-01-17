import { apiSlice } from "@/app/api";
import { RTKQueryTag } from "@/constants/rtk";

import { PaginatedQueryParams, SortQueryParams } from "@/interfaces/api";
import {
  BalanceProgression,
  Contact,
  ContactApiRequestQuery,
  ExpenseStatsApiResponse,
  WeeklyActivity,
} from "./dashboard.types";
import {
  Transaction,
  TransactionDirection,
  TransactionType,
} from "@/interfaces/transactions";
import { daysArray, monthsMap } from "./dashboard.constants";

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

    getWeeklyActivity: builder.query<WeeklyActivity | undefined, void>({
      query: () => ({
        url: "transactions",
        params: {
          _sort: "date",
          _order: "ASC",
        } satisfies SortQueryParams,
      }),
      providesTags: [RTKQueryTag.WEEKLY_ACTIVITY],
      transformResponse: (response: Transaction[]) => {
        // get start date to show in chart (today - 6)
        const startDate = new Date(
          new Date().setDate(new Date().getDate() - 6)
        );

        // filter out transactions that happened before start date
        const filteredData = response.filter(
          (item) => new Date(item.date) >= startDate
        );

        // get day of startDate
        const startDay = startDate.getDay();

        // get days label to show in chart
        const days = [
          ...daysArray.slice(startDay),
          ...daysArray.slice(0, startDay),
        ];

        const incoming: number[] = [0, 0, 0, 0, 0, 0, 0];
        const outgoing: number[] = [0, 0, 0, 0, 0, 0, 0];

        days.forEach((day, i) => {
          // find index of the day
          const index = daysArray.findIndex((item) => item === day);
          const transactionsOnThisDay = filteredData.filter(
            // find transactions that happened on that day
            (item) => new Date(item.date).getDay() === index
          );

          for (const transaction of transactionsOnThisDay) {
            switch (transaction.direction) {
              case TransactionDirection.INCOMING: {
                // sum up incoming transaction amount
                incoming[i] += transaction.amount;
                break;
              }
              case TransactionDirection.OUTGOING: {
                // sum up incoming transaction amount
                outgoing[i] += transaction.amount;
                break;
              }
            }
          }
        });

        return {
          days,
          [TransactionDirection.INCOMING]: incoming,
          [TransactionDirection.OUTGOING]: outgoing,
        };
      },
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
