import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: { value: 0 }, // Initial state with `value` set to 0
  reducers: {
    increment: (state) => {
      state.value += 1; // Increment theö value by 1
    },
    decrement: (state) => {
      state.value -= 1; // Decrement the value by 1
    },
  },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
