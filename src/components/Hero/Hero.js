import React, { useEffect } from "react";
import "./Hero.css";
import { Link } from "react-router-dom";
import { useGetBestSellerQuery } from "../../redux/products";

const Hero = () => {
  const bestProducts = useGetBestSellerQuery();
  useEffect(() => {
    bestProducts.isSuccess
      ? console.log(bestProducts.data)
      : console.log("khesara");
  }, []);

  const random = Math.floor(Math.random() * 30);

  const productOne = bestProducts.isSuccess
    ? bestProducts?.data[random].product_main_image_url
    : null;
  return (
    <div className="home">
      <div className="home-container">
        <h1>
          Hello! What would <br /> you like to buy?
        </h1>
        <p>
          Search between millions of products from hundreads different online
          shops. Our price comparison service helps you find the best deal on
          the market.
        </p>
        <Link id="shop-now-link" to="/best_deals">
          Shop now
        </Link>
        <img
          className={
            bestProducts.isLoading ? "hero-img loading" : "hero-img"
          }
          src={productOne}
          alt=""
        />
      </div>
    </div>
  );
};

export default Hero;
