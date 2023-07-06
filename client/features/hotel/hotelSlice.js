/**
 * Title: hotelSlice.js
 * Author: Hasibul Islam
 * Portfolio: https://developer-hasibulislam.vercel.app
 * Linkedin: https://www.linkedin.com/in/developer-hasibulislam
 * Date: 05, July 2023
 */

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  hotel: {},
};

const hotelSlice = createSlice({
  name: "hotel",
  initialState,
  reducers: {
    // add hotel information from vendor dashboard
    addHotel: (state, { payload }) => {
      state.hotel = { ...state.hotel, ...payload };
    },
  },
});

export const { addHotel } = hotelSlice.actions;
export default hotelSlice.reducer;
