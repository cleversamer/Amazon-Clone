import { combineReducers } from "@reduxjs/toolkit";
import entitiesReducer from "./entities";
import userReducer from "./user";

export default combineReducers({
  entities: entitiesReducer,
  user: userReducer,
});
