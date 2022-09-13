import React, { useEffect } from "react";
import Product from "../Product/Product";
import "./Products.css";
import { useSelector, useDispatch } from "react-redux";
import { loadProducts } from "./../../redux/products";

const Products = () => {
  const { pending, failed, products } = useSelector((state) => state.products);
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(loadProducts());
    }, []);
  return (
    <div className="Products">
      {products.map((product, index) => (
        <Product
          product={product}
          pending={pending}
          failed={failed}
          key={index}
          title={product.title}
          price={product.price}
          description={product.description}
          image={product.img}
          rating={product.rating}
          category={product.category}
          id={product.id}
        />
      ))}
    </div>
  );
};

export default Products;
