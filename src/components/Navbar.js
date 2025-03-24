import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={{ padding: "10px", background: "#282c34", color: "white" }}>
      <Link to="/" style={{ margin: "10px", color: "white", textDecoration: "none" }}>Home</Link>
      <Link to="/products" style={{ margin: "10px", color: "white", textDecoration: "none" }}>Products</Link>
      <Link to="/cart" style={{ margin: "10px", color: "white", textDecoration: "none" }}>Cart</Link>
      <Link to="/checkout" style={{ margin: "10px", color: "white", textDecoration: "none" }}>Checkout</Link>
      <Link to="/login" style={{ margin: "10px", color: "yellow", textDecoration: "none" }}>Login</Link>
    </nav>
  );
};

export default Navbar;
