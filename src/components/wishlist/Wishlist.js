import React from 'react'
import { useSelector } from 'react-redux';
import "./Wishlist.css";

const Wishlist = () => {
const { products } = useSelector((state) => state.products);
  return (
    <div id="Wishlist">
      {products
        .filter((product) => product.liked === true)
        .map((product) => {
          return (
            <div key={product.id} className="wishlist-item">
              <div className="wishlist-item-background">
                <img src={product.img} alt={product.title} />
              </div>
              <h3>{product.title}</h3>
              <p>{product.price}$</p>
            </div>
          );
        })}
    </div>
  );
};

export default Wishlist