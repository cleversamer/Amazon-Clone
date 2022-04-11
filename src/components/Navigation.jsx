import React from "react";
import NavLink from "./NavLink";

const Navigation = () => {
  return (
    <ul className="navbar__navigation">
      <NavLink line1="Hello" line2="Sign In" />

      <NavLink line1="returns" line2="&amp; Orders" />

      <NavLink line1="Your" line2="Prime" />
    </ul>
  );
};

export default Navigation;
