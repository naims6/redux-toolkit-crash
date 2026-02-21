import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getPost } from "./postsApi";

interface Post {
  userId: number,
  id: number,
  title: string,
  body: string
}

export type PostState = {
  posts: Post[];
  isLoading: boolean;
  isError: boolean;
  error: string | undefined | null;
};

const initialState: PostState = {
  posts: [],
  isLoading: false,
  isError: false,
  error: null,
};

export const fetchPosts = createAsyncThunk<Post[]>("/posts/fetchPosts", async () => {
  const posts = await getPost();
  return posts;
});

export const postSlice = createSlice({
  name: "posts",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.posts = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error.message;
      });
  },
  reducers: {},
});

export default postSlice.reducer;
