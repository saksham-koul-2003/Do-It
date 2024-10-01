// src/redux/actions/taskActions.js
export const ADD_TASK = "ADD_TASK";
export const TOGGLE_TASK = "TOGGLE_TASK";
export const DELETE_TASK = "DELETE_TASK";
export const EDIT_TASK = "EDIT_TASK";
export const TOGGLE_FAVORITE = "TOGGLE_FAVORITE"; // Add favorite action

export const addTask = (task) => ({
  type: ADD_TASK,
  payload: task,
});

export const toggleTask = (index) => ({
  type: TOGGLE_TASK,
  payload: index,
});

export const deleteTask = (index) => ({
  type: DELETE_TASK,
  payload: index,
});

export const editTask = (index, text) => ({
  type: EDIT_TASK,
  payload: { index, text },
});

// New action to toggle favorite status
export const toggleFavorite = (index) => ({
  type: TOGGLE_FAVORITE,
  payload: index,
});
