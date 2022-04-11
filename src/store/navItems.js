import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";

const slice = createSlice({
  name: "navItems",
  initialState: {
    list: [],
  },
  reducers: {
    addNavItems: (navItems, action) => {
      navItems.list = [...action.payload.data];
    },
  },
});

const { addNavItems } = slice.actions;

export const fetchNavItems = (items) => addNavItems({ data: items });

export const getNavItems = createSelector(
  (state) => state.entities.navItems,
  (navItems) => navItems.list
);

export default slice.reducer;
