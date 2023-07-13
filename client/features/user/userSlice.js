/**
 * Title: userSlice.js
 * Author: Hasibul Islam
 * Portfolio: https://developer-hasibulislam.vercel.app
 * Linkedin: https://www.linkedin.com/in/developer-hasibulislam
 * Date: 13, July 2023
 */

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // add user information from vendor dashboard
    addUser: (state, { payload }) => {
      state.user = { ...state.user, ...payload };
    },
  },
});

export const { addUser } = userSlice.actions;
export default userSlice.reducer;
