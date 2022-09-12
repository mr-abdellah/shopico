import "./addWishlistBtn.css";
import { useState } from "react";
import { useDispatch } from 'react-redux';
import { addTowishlist } from "../../redux/products";

const AddWishlistBtn = ({ product }) => {
  const { id, liked } = product;
  const dispatch = useDispatch();
  
  const addToWishlist = (e) => {
    e.preventDefault();
    dispatch(addTowishlist({ id, like: !liked }));
  };

  return (
    <button
      id="addWishlistBtn"
      type="submit"
      onClick={addToWishlist}
    >
      Add to wishlist
    </button>
  );
};

export default AddWishlistBtn;
