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
    // upload new avatar
    uploadAvatar: builder.mutation({
      query: (body) => ({
        url: "/user/avatar",
        method: "POST",
        body,
      }),
    }),

    // delete avatar
    deleteAvatar: builder.mutation({
      query: (filename) => ({
        url: `/user/avatar/?filename=${filename}`,
        method: "DELETE",
      }),
    }),

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

    // update user
    updateUser: builder.mutation({
      query: ({ id, body }) => ({
        url: `/user/?id=${id}`,
        method: "PATCH",
        body,
      }),

      invalidatesTags: ["User"],
    }),

    // delete user
    deleteUser: builder.mutation({
      query: (id) => ({
        url: `/user/?id=${id}`,
        method: "DELETE",
      }),

      invalidatesTags: ["User"],
    }),
  }),
});

export const {
  useUploadAvatarMutation,
  useDeleteAvatarMutation,
  useAddNewUserMutation,
  useGetAllUsersQuery,
  useGetSingleUserQuery,
  useGetUserByPaginationQuery,
  useUpdateUserMutation,
  useDeleteUserMutation,
} = userApi;
