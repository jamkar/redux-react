import { createSlice } from '@reduxjs/toolkit';

const initialState = { value: 0, showCounter: true };

export const slice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment(state) {
      state.value++;
    },
    decrement(state) {
      state.value--;
    },
    increase(state, action) {
      state.value = state.value + action.payload;
    },
    toggle(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

export const counterReducer = slice.reducer;
export const counterActions = slice.actions;
