import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";

const slice = createSlice({
  name: "user",
  initialState: {
    auth: {},
    cart: [],
  },
  reducers: {
    userAuthenticated: (user, action) => {
      user.auth = action.payload.data;
    },

    itemAddedToUserCart: (user, action) => {
      user.cart.push(action.payload.data);
    },

    itemRemovedFromUserCart: (user, action) => {
      user.cart = user.cart.filter((item) => item.id !== action.payload.id);
    },
  },
});

const { userAuthenticated, itemAddedToUserCart, itemRemovedFromUserCart } =
  slice.actions;

export const authUser = (user) => userAuthenticated({ data: user });

export const addItemToUserCart = (item) => itemAddedToUserCart({ data: item });

export const removeItemFromUserCart = (itemId) =>
  itemRemovedFromUserCart({ id: itemId });

export const getUserAuth = () =>
  createSelector(
    (state) => state.user,
    (user) => user.auth
  );

export const getUserCart = createSelector(
  (state) => state.user,
  (user) => user.cart
);

export default slice.reducer;
