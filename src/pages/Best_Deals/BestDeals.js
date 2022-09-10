import React from "react";
import Products from "./../../components/Products/Products";
import { useBestDealsQuery } from "../../redux/products";

const bestDeals = () => {

  return (
    <>
      <Products />
    </>
  );
};

export default bestDeals;
