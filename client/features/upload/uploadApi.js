/**
 * Title: uploadApi.js
 * Author: Hasibul Islam
 * Portfolio: https://developer-hasibulislam.vercel.app
 * Linkedin: https://www.linkedin.com/in/developer-hasibulislam
 * Date: 05, July 2023
 */

import apiSlice from "../api/apiSlice";

const uploadApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // upload featured, banner & gallery photos
    uploadPhotos: builder.mutation({
      query: (formData) => ({
        url: "/vendor/upload",
        method: "POST",
        body: formData,
      }),
    }),

    // delete a featured, banner & gallery photo
    deletePhoto: builder.mutation({
      query: (path) => ({
        url: `/vendor/upload/${path}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const { useUploadPhotosMutation, useDeletePhotoMutation } = uploadApi;
