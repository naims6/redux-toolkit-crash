import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
  id: number;
  count: number;
}

const initialState: CounterState[] = [
  {
    id: 1,
    count: 6,
  },
  {
    id: 2,
    count: 9,
  },
  {
    id: 3,
    count: 3,
  },
];

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state, action: PayloadAction<{ id: number }>) => {
      const findIndex = state.findIndex(
        (counter) => counter.id === action.payload.id,
      );
      state[findIndex].count++;
    },
    decrement: (state, action: PayloadAction<{ id: number }>) => {
      //   const updatedValue = state.map((counter) => {
      //    return counter.id === action.payload ? counter.count-- : counter
      //   })
      const findIndex = state.findIndex(
        (counter) => counter.id === action.payload.id,
      );
      state[findIndex].count--;
    },
    incrementByAmount: (state, action: PayloadAction<{ id: number, value: number }>) => {
      const findIndex = state.findIndex(
        (counter) => counter.id === action.payload.id,
      );
      state[findIndex].count += action.payload.value;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
