/**
 * Title: attributeApi.js
 * Author: Hasibul Islam
 * Portfolio: https://developer-hasibulislam.vercel.app
 * Linkedin: https://www.linkedin.com/in/developer-hasibulislam
 * Date: 09, July 2023
 */

import apiSlice from "../api/apiSlice";

const attributeApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // upload attribute icon
    uploadAttributeIcon: builder.mutation({
      query: (formData) => ({
        url: "/attribute/icon",
        method: "POST",
        body: formData,
      }),
    }),

    // add new attribute
    addNewAttribute: builder.mutation({
      query: (body) => ({
        url: "/attribute/",
        method: "POST",
        body,
      }),
    }),

    // update attribute
    updateAttribute: builder.mutation({
      query: (body) => ({
        url: "/attribute/",
        method: "PATCH",
        body,
      }),
    }),
  }),
});

export const {
  useUploadAttributeIconMutation,
  useAddNewAttributeMutation,
  useUpdateAttributeMutation,
} = attributeApi;
