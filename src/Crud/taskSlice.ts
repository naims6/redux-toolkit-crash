import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  searchTerm: "",
  filterStatus: "all",
};

export const taskSlice = createSlice({
  name: "taskManagement",
  initialState,
  reducers: {},
});


export default taskSlice.reducer