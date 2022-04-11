import React from "react";
import { Link } from "react-router-dom";

const NavLink = ({ line1, line2 }) => {
  return (
    <li>
      <Link className="navbar__nav-option" to="/">
        <span className="navbar__nav-option-line1">{line1}</span>
        <span className="navbar__nav-option-line2">{line2}</span>
      </Link>
    </li>
  );
};

export default NavLink;
