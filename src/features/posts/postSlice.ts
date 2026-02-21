import { createSlice } from "@reduxjs/toolkit";

export interface PostState {
  posts: string[];
  isLoading: boolean;
  isError: boolean;
  error: null;
}

const initialState = {
  posts: [],
  isLoading: false,
  isError: false,
  error: null,
};

export const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
});

export default postSlice.reducer;
