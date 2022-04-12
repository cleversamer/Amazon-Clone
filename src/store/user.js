import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";

const slice = createSlice({
  name: "user",
  initialState: {
    auth: null,
    cart: { length: 0, titles: [] },
  },
  reducers: {
    userAuthenticated: (user, action) => {
      user.auth = action.payload.data;
    },

    itemAddedToUserCart: (user, action) => {
      const item = action.payload.data;
      let length = isNaN(user.cart[item.title]?.length)
        ? 0
        : user.cart[item.title]?.length;
      length++;
      user.cart[item.title] = { item, length };
      user.cart.length++;

      const index = user.cart.titles.indexOf(item.title);
      if (index === -1) {
        user.cart.titles.push(item.title);
      }
    },

    itemRemovedFromUserCart: (user, action) => {
      const { length } = user.cart[action.payload.id];
      delete user.cart[action.payload.id];
      user.cart.length -= length;
      user.cart.titles = user.cart.titles.filter(
        (title) => title !== action.payload.id
      );
    },

    itemReducedFromUserCart: (user, action) => {
      const { length } = user.cart[action.payload.id];
      if (length > 1) {
        user.cart[action.payload.id].length--;
        user.cart.length--;
      } else {
        const { length } = user.cart[action.payload.id];
        delete user.cart[action.payload.id];
        user.cart.length -= length;
        user.cart.titles = user.cart.titles.filter(
          (title) => title !== action.payload.id
        );
      }
    },
  },
});

const {
  userAuthenticated,
  itemAddedToUserCart,
  itemRemovedFromUserCart,
  itemReducedFromUserCart,
} = slice.actions;

export const authUser = (user) => userAuthenticated({ data: user });

export const addItemToUserCart = (item) => itemAddedToUserCart({ data: item });

export const removeItemFromUserCart = (title) =>
  itemRemovedFromUserCart({ id: title });

export const reduceItemFromUserCart = (title) =>
  itemReducedFromUserCart({ id: title });

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
