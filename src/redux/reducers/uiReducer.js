// src/redux/reducers/uiReducer.js
import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    isDarkMode: false,
  },
  reducers: {
    toggleDarkMode(state) {
      state.isDarkMode = !state.isDarkMode;
    },
  },
});

export const { toggleDarkMode } = uiSlice.actions;
export default uiSlice.reducer;
