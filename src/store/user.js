import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "user",
  initialState: {},
  reducers: {
    userAuthenticated: (user, action) => {
      user = action.payload;
    },
  },
});

const { userAuthenticated } = slice.actions;

export const authUser = (user) => userAuthenticated({ data: user });

export default slice.reducer;
