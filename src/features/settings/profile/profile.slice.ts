import { apiSlice } from "@/app/api";
import { RTKQueryTag } from "@/constants/rtk";
import { Profile } from "./profile.types";

const extendedApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProfile: builder.query<Profile | undefined, void>({
      query: () => ({
        url: "profile",
      }),
      providesTags: [RTKQueryTag.PROFILE],
    }),
    updateProfile: builder.mutation<void, Partial<Profile>>({
      query: (body) => ({
        url: "profile",
        method: "PATCH",
        body,
      }),
      invalidatesTags: [RTKQueryTag.PROFILE],
    }),
  }),
});

export const { useGetProfileQuery } = extendedApiSlice;
