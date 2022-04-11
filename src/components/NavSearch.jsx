import React, { useState } from "react";
import { Search } from "@mui/icons-material";

const NavSearch = () => {
  const [input, setInput] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    setInput("");
  };

  return (
    <form className="navbar__search">
      <input
        value={input}
        onChange={(e) => setInput(e.currentTarget.value)}
        className="navbar__search-input"
        type="text"
        placeholder="Search Amazon"
      />

      <button type="submit" onClick={handleSearch}>
        <Search className="navbar__search-icon clickable" />
      </button>
    </form>
  );
};

export default NavSearch;
