import React from "react";
import { Link } from "react-router-dom";
import { navItems } from "../../utils/data";
import NavLogo from "./NavLogo";
import NavSearch from "./NavSearch";
import Navigation from "./Navigation";
import NavCart from "./NavCart";
import "./index.css";

const Navbar = () => {
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
