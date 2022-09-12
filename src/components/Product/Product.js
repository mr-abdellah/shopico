import "./Product.css";
import Rating from "./../rating/Rating";
import BuyBtn from '../buyBtn/BuyBtn';
import AddWishlistBtn from "../addWishlistBtn/addWishlistBtn";
import { useState } from 'react';

const Product = ({
  id,
  title,
  image,
  description,
  category,
  price,
  rating,
  pending,
  failed,
  product,
}) => {

  return (
    <>
      {pending ? (
        <div className="Card loading"></div>
      ) : (
        <div className="Card">
          <div className="deal-background">
            <img src={image} alt={title} />
          </div>
          <div className="deal-info">
            <h3 id="deal-title">{title}</h3>
            <p id="deal-price">{`Price ${price}$`}</p>
            <div className="rating-placeholder">{Rating(rating)}</div>
            <div className="deal-btns">
              <AddWishlistBtn product={product}/>
              <BuyBtn />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Product;
