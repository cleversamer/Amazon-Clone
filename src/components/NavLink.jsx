import React from "react";

const NavLink = ({ line1, line2 }) => {
  return (
    <div className="navbar__nav-option">
      <span className="navbar__nav-option-line1">{line1}</span>
      <span className="navbar__nav-option-line2">{line2}</span>
    </div>
  );
};

export default NavLink;
