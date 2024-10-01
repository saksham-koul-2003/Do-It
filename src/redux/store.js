// src/redux/store.js

import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/authReducers"; // Adjust path if necessary
import taskReducer from "./reducers/taskReducer"; // Import the taskReducer
import uiReducer from "./reducers/uiReducer"; // Import the uiReducer

const store = configureStore({
  reducer: {
    auth: authReducer,
    tasks: taskReducer, // Add the taskReducer here
    // ui: uiReducer, // Add the uiReducer for dark mode
  },
});

export default store;
