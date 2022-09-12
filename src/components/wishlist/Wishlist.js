import React from 'react'
import { useSelector } from 'react-redux';

const Wishlist = () => {
const { pending, failed, products } = useSelector((state) => state.products);
  return (
    <div id="Wishlist">
      {products
        .filter((product) => product.liked === true)
        .map((product) => {
          return (
            <div key={product.id} id="cart">
              <img src={product.img} alt={product.title} />
              <h3>{product.title}</h3>
              <p>{product.price}$</p>
            </div>
          );
        })}
    </div>
  );
};

export default Wishlist