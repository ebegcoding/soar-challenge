import { apiSlice } from "@/app/api";
import { RTKQueryTag } from "@/constants/rtk";
import {
  Transaction,
  TransactionApiRequestQuery,
  TransactionDirection,
  TransactionInput,
} from "@/interfaces/transactions";
import { PaginatedQueryParams, SortQueryParams } from "@/interfaces/api";

const extendedApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getTransactions: builder.query<
      Transaction[] | undefined,
      TransactionApiRequestQuery
    >({
      query: ({ limit, sort, order }) => ({
        url: "transactions",
        params: {
          _page: 1,
          _limit: limit,
          _sort: sort,
          _order: order,
        } satisfies PaginatedQueryParams & SortQueryParams,
      }),
      providesTags: [RTKQueryTag.TRANSACTIONS],
    }),
    createOutgoingTransaction: builder.mutation<void, TransactionInput>({
      query: (body) => ({
        url: "transactions",
        method: "POST",
        body: {
          ...body,
          date: new Date().toISOString(),
          direction: TransactionDirection.OUTGOING,
        } satisfies Omit<Transaction, "id">,
      }),
      invalidatesTags: [
        RTKQueryTag.TRANSACTIONS,
        RTKQueryTag.EXPENSE_STATS,
        RTKQueryTag.WEEKLY_ACTIVITY,
      ],
    }),
  }),
});

export const { useGetTransactionsQuery, useCreateOutgoingTransactionMutation } =
  extendedApiSlice;
