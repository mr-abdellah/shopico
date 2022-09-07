import "./Navbar.css";
import React from "react";
import { Link } from "react-router-dom";
import { BsFillPersonFill } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";

const Navbar = () => {
  return (
    <div className="nav" id="navbar">
      <input type="checkbox" id="nav-check" />
      <div className="nav-header">
        <Link to='/' className="nav-title">Shopico</Link>
      </div>
      <div className="nav-btn">
        <label for="nav-check">
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/categories">Categories</Link>
        <Link to="/best_deals">Best Deals</Link>
        <Link to="/best_seller">Best Seller</Link>
        <Link to="">
          <BsFillPersonFill className="profile" />
        </Link>
        <Link to="">
          <AiOutlineHeart id="whishlist"/>
        </Link>
        <Link to="">
          <FiShoppingCart id="cart" />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
