import React from "react";
import { Search } from "@mui/icons-material";

const NavSearch = () => {
  return (
    <div className="navbar__search">
      <input
        className="navbar__search-input"
        type="text"
        placeholder="Search Amazon"
      />
      <Search className="navbar__search-icon clickable" />
    </div>
  );
};

export default NavSearch;
