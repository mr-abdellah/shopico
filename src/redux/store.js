import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import productsReducer from "./products";

const store = configureStore({
  reducer: {
    products: productsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
