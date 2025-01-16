import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./api";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    // Disable serializableCheck as we currently have no reason to keep store date serializable
    // eslint-disable-next-line unicorn/prefer-spread -- this results in different and more precise TS behavior 😵‍💫
    getDefaultMiddleware({ serializableCheck: false }).concat([
      apiSlice.middleware,
    ]),
});

export type Store = typeof store;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
