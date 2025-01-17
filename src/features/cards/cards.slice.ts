import { apiSlice } from "@/app/api";
import { RTKQueryTag } from "@/constants/rtk";
import { Card, CardApiRequestQuery } from "@/interfaces/cards";
import { PaginatedQueryParams } from "@/interfaces/api";
import { produce } from "immer";

const extendedApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCards: builder.query<Card[] | undefined, CardApiRequestQuery>({
      query: ({ limit }) => ({
        url: "cards",
        params: {
          _page: 1,
          _limit: limit,
        } satisfies PaginatedQueryParams,
      }),
      providesTags: [RTKQueryTag.CARDS],
      transformResponse: (response: Card[]) =>
        response.map((item) =>
          produce(item, (old) => {
            old.cardNumber = [
              old.cardNumber.slice(0, 4),
              "****",
              "****",
              old.cardNumber.slice(-4),
            ].join(" ");
          })
        ),
    }),
  }),
});

export const { useGetCardsQuery } = extendedApiSlice;
