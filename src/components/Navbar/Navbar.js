import "./Navbar.css";
import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { BsFillPersonFill } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import Wishlist from '../wishlist/Wishlist';

const Navbar = () => {
  const [showWishList, setshowWishList] = useState(true);
  const handleWhishlist = () => {
    setshowWishList(!showWishList);
    console.log('done');
  }
  return (
    <div className="nav" id="navbar">
      <input type="checkbox" id="nav-check" />
      <div className="nav-header">
        <Link to="/" className="nav-title">
          Shopico
        </Link>
      </div>
      <div className="nav-btn">
        <label for="nav-check">
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>

      <div className="nav-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/best_deals">Best Deals</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/faq">FAQ</NavLink>
        <NavLink to="">
          <BsFillPersonFill className="profile" />
        </NavLink>
        <div id="whishlist" className={showWishList ? "" : ""}>
          <AiOutlineHeart onClick={handleWhishlist} />
        </div>
        <NavLink to="">
          <FiShoppingCart id="cart" />
        </NavLink>
        {showWishList ? (
          <Wishlist />
        ) : (
          <div style={{ display: "none" }}>
            <Wishlist />
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
