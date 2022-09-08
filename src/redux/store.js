import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import BestSellerApi from './products';

const store = configureStore({
  reducer: {
    [BestSellerApi.reducerPath]: BestSellerApi.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
