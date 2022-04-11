import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";

const slice = createSlice({
  name: "items",
  initialState: {
    list: [],
  },
  reducers: {
    itemsAdded: (items, action) => {
      items.list = action.payload.data;
    },
  },
});

const { itemsAdded } = slice.actions;

export const addItems = (items) => itemsAdded({ data: items });

export const getItems = createSelector(
  (state) => state.entities.items,
  (items) => items.list
);

export default slice.reducer;
