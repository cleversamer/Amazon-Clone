import React from "react";
import NavLink from "./NavLink";

const Navigation = ({ items }) => {
  return (
    <ul className="navbar__navigation">
      {items?.map((item) => (
        <NavLink
          key={Date.now() + item.line1}
          line1={item.line1}
          line2={item.line2}
          path={item.path || "/"}
        />
      ))}
    </ul>
  );
};

export default Navigation;
