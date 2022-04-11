import React from "react";
import { ShoppingBasket } from "@mui/icons-material";

const NavCart = ({ noOfItems }) => {
  const mapItems = () => {
    const result = parseInt(noOfItems);
    return isNaN(result) ? 0 : result;
  };

  return (
    <div className="navbar__cart">
      <ShoppingBasket />
      <span className="navbar__cart-count">{mapItems()}</span>
    </div>
  );
};

export default NavCart;
