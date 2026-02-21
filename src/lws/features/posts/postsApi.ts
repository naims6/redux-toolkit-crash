import { isRejectedWithValue } from "@reduxjs/toolkit";

export const getPost = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");

    return response.json();
  } catch (e: any) {
    return isRejectedWithValue(e.message);
  }
};
