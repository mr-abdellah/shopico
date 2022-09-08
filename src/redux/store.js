import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { storeApi } from "./products";

const store = configureStore({
  reducer: {
    [storeApi.reducerPath]: storeApi.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
