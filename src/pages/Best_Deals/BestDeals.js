import React from 'react';
import Products from "./../../components/Products/Products";
import { useBestDealsQuery } from "../../redux/products";

const bestDeals = () => {
      
      const v = useBestDealsQuery();
      console.log(v.data);
  return (
    <>
      <Products />
    </>
  );
}

export default bestDeals