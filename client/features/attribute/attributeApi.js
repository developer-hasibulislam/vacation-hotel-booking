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

      onQueryStarted: async (_, { __, queryFulfilled }) => {
        const { data } = await queryFulfilled;
        return data;
      },

      invalidatesTags: ["Attribute"],
    }),

    // delete attribute icon
    deleteAttributeIcon: builder.mutation({
      query: (filename) => ({
        url: `/attribute/icon/?filename=${filename}`,
        method: "DELETE",
      }),

      invalidatesTags: ["Attribute"],
    }),

    // add new attribute
    addNewAttribute: builder.mutation({
      query: (body) => ({
        url: "/attribute/",
        method: "POST",
        body,
      }),

      invalidatesTags: ["Attribute"],
    }),

    // update attribute
    updateAttribute: builder.mutation({
      query: (body) => ({
        url: "/attribute/",
        method: "PATCH",
        body,
      }),

      invalidatesTags: ["Attribute"],
    }),

    // get attributes
    getAttributes: builder.query({
      query: () => "/attribute/",

      providesTags: ["Attribute"],
    }),
  }),
});

export const {
  useUploadAttributeIconMutation,
  useDeleteAttributeIconMutation,
  useAddNewAttributeMutation,
  useUpdateAttributeMutation,
  useGetAttributesQuery,
} = attributeApi;
