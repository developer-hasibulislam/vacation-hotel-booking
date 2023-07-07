/**
 * Title: hotelApi.js
 * Author: Hasibul Islam
 * Portfolio: https://developer-hasibulislam.vercel.app
 * Linkedin: https://www.linkedin.com/in/developer-hasibulislam
 * Date: 05, July 2023
 */

import apiSlice from "../api/apiSlice";

const hotelApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // upload hotel images
    uploadHotelImages: builder.mutation({
      query: (formData) => ({
        url: "/vendor/hotel/images",
        method: "POST",
        body: formData,
      }),
    }),

    // add new hotel
    addNewHotel: builder.mutation({
      query: (body) => ({
        url: "/vendor/hotel",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Hotel"],
    }),

    // get all hotels
    getAllHotels: builder.query({
      query: () => "/vendor/hotel",
      providesTags: ["Hotel"],
    }),

    // get single hotel
    getSingleHotel: builder.query({
      query: (id) => `/hotel/?id=${id}`,
      providesTags: ["Hotel"],
    }),

    // get hotel by pagination
    getHotelByPagination: builder.query({
      query: (page) => `/vendor/hotel/?page=${page}`,
      providesTags: ["Hotel"],
    }),

    // update hotel
    updateHotel: builder.mutation({
      query: ({ id, body }) => ({
        url: `/vendor/hotel/?i=${id}`,
        method: "PATCH",
        body,
      }),
      invalidatesTags: ["Hotel"],
    }),

    // delete multiple hotels
    deleteMultipleHotels: builder.mutation({
      query: (body) => ({
        url: "/vendor/hotel",
        method: "DELETE",
        body,
      }),
      invalidatesTags: ["Hotel"],
    }),

    // delete single hotel
    deleteSingleHotel: builder.mutation({
      query: (id) => ({
        url: `/vendor/hotel/?id=${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Hotel"],
    }),
  }),
});

export const {
  useUploadHotelImagesMutation,
  useAddNewHotelMutation,
  useGetAllHotelsQuery,
  useGetSingleHotelQuery,
  useGetHotelByPaginationQuery,
  useUpdateHotelMutation,
  useDeleteMultipleHotelsMutation,
  useDeleteSingleHotelMutation,
} = hotelApi;
