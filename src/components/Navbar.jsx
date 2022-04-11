import React from "react";
import { Link } from "react-router-dom";
import NavLogo from "./NavLogo";
import NavSearch from "./NavSearch";
import Navigation from "./Navigation";
import NavCart from "./NavCart";
import "../css/navbar.css";

const Navbar = () => {
  const navItems = [
    { line1: "Hello,", line2: "Sign In", path: "/login" },
    { line1: "returns", line2: "& Orders" },
    { line1: "Your", line2: "Prime" },
  ];

  return (
    <nav className="navbar">
      <Link to="/">
        <NavLogo />
      </Link>

      <NavSearch />

      <Navigation items={navItems} />

      <Link to="/checkout">
        <NavCart noOfItems={0} />
      </Link>
    </nav>
  );
};

export default Navbar;
