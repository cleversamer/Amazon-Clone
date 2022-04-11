import { combineReducers } from "@reduxjs/toolkit";
import navItemsReducer from "./navItems";
import itemsReducer from "./items";

export default combineReducers({
  items: itemsReducer,
  navItems: navItemsReducer,
});
