/**
 * Title: apiSlice.js
 * Author: Hasibul Islam
 * Portfolio: https://developer-hasibulislam.vercel.app
 * Linkedin: https://www.linkedin.com/in/developer-hasibulislam
 * Date: 05, July 2023
 */

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: `${process.env.NEXT_PUBLIC_BASE_URL}/api` }),
  tagTypes: ["Hotel", "Attribute"],
  endpoints: () => ({}),
});

export default apiSlice;
