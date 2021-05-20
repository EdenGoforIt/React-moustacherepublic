import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { ShoppingCart } from "../../components/cart/ShoppingCart";

export const Navbar = () => {
  const activeStyle = { color: "#F15B2A" };

  return (
    <nav className="nav-container m-t-15">
      <div className="row">
        <div className="col-lg-12">
          <div className="container shopping-cart">
            <ShoppingCart />
          </div>
        </div>
      </div>
    </nav>
  );
};
