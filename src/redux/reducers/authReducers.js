import { createSlice } from "@reduxjs/toolkit";

const loadState = () => {
  try {
    const serializedState = localStorage.getItem("auth");
    if (serializedState === null) {
      return {
        isAuthenticated: false,
        user: null,
      };
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return {
      isAuthenticated: false,
      user: null,
    };
  }
};

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("auth", serializedState);
  } catch (err) {
    console.error("Could not save state", err);
  }
};

const initialState = loadState(); // Load state from localStorage

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginUser: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;
      saveState(state); // Save to localStorage after login
    },
    logoutUser: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      localStorage.removeItem("auth"); // Clear localStorage on logout
    },
  },
});

export const { loginUser, logoutUser } = authSlice.actions;
export default authSlice.reducer;
