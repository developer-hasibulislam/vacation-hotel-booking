/**
 * Title: store.js
 * Author: Hasibul Islam
 * Portfolio: https://developer-hasibulislam.vercel.app
 * Linkedin: https://www.linkedin.com/in/developer-hasibulislam
 * Date: 05, July 2023
 */

import { configureStore } from "@reduxjs/toolkit";
import findPlaceSlice from "../features/hero/findPlaceSlice";
import apiSlice from "../features/api/apiSlice";
import hotelSlice from "../features/hotel/hotelSlice";
import userSlice from "../features/user/userSlice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    hotel: hotelSlice,
    user: userSlice,
    hero: findPlaceSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
