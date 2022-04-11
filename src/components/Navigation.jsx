import React from "react";
import { Link } from "react-router-dom";
import NavLink from "./NavLink";

const Navigation = () => {
  return (
    <Link className="navbar__nav-link" to="/">
      <div className="navbar__navigation">
        <NavLink line1="Hello" line2="Sign In" />

        <NavLink line1="returns" line2="&amp; Orders" />

        <NavLink line1="Your" line2="Prime" />
      </div>
    </Link>
  );
};

export default Navigation;
