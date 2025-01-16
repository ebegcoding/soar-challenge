import { API_REDUCER_PATH, RTKQueryTag } from "@/constants/rtk";
import {
  BaseQueryFn,
  createApi,
  FetchArgs,
  fetchBaseQuery,
  FetchBaseQueryError,
} from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_BACKEND_URL,
});

const baseQueryWithErrorHandlingAndRedirectNavigation: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  const result = await baseQuery(args, api, extraOptions);
  if (result?.error) {
    if (result.meta?.response?.redirected) {
      window.location.replace(result.meta.response.url);
    }
  }

  return result;
};

export const apiSlice = createApi({
  reducerPath: API_REDUCER_PATH,
  baseQuery: baseQueryWithErrorHandlingAndRedirectNavigation,
  endpoints: () => ({}),
  tagTypes: Object.values(RTKQueryTag),
});
