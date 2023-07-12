/**
 * Title: userApi.js
 * Author: Hasibul Islam
 * Portfolio: https://developer-hasibulislam.vercel.app
 * Linkedin: https://www.linkedin.com/in/developer-hasibulislam
 * Date: 12, July 2023
 */

import apiSlice from "../api/apiSlice";

const userApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // add new user
    addNewUser: builder.mutation({
      query: (body) => ({
        url: "/user",
        method: "POST",
        body,
      }),

      invalidatesTags: ["User"],
    }),

    // get all users
    getAllUsers: builder.query({
      query: () => "/user",
      providesTags: ["User"],
    }),

    // get single user
    getSingleUser: builder.query({
      query: (id) => `/user/?id=${id}`,
      providesTags: ["User"],
    }),

    // get user by pagination
    getUserByPagination: builder.query({
      query: (page) => `/user/?page=${page}`,
      providesTags: ["User"],
    }),
  }),
});

export const {
  useAddNewUserMutation,
  useGetAllUsersQuery,
  useGetSingleUserQuery,
  useGetUserByPaginationQuery,
} = userApi;
