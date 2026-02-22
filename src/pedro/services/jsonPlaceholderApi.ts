import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export const jsonPlaceholderApi = createApi({
  reducerPath: "jsonPlaceholderApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  refetchOnFocus: true,
  // keepUnusedDataFor: 5,
  endpoints: (build) => ({
    getPost: build.query<Post[], void>({ query: () => ({ url: "posts" }) }),
    createPosts: build.mutation({
      query: (newPost) => ({
        url: `posts`,
        method: "POST",
        body: newPost,
      }),
    }),
  }),
});

export const { useGetPostQuery, useCreatePostsMutation } = jsonPlaceholderApi;
