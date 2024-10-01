import {
  ADD_TASK,
  TOGGLE_TASK,
  DELETE_TASK,
  EDIT_TASK,
  TOGGLE_FAVORITE,
} from "../actions/taskActions";

const initialState = {
  tasks: [],
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INIT_TASKS": // New case to initialize tasks from localStorage
      return {
        ...state,
        tasks: action.payload,
      };
    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    case TOGGLE_TASK:
      return {
        ...state,
        tasks: state.tasks.map((task, index) =>
          index === action.payload
            ? { ...task, completed: !task.completed }
            : task
        ),
      };
    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((_, index) => index !== action.payload),
      };
    case EDIT_TASK:
      return {
        ...state,
        tasks: state.tasks.map((task, index) =>
          index === action.payload.index
            ? { ...task, text: action.payload.text }
            : task
        ),
      };
    case TOGGLE_FAVORITE:
      return {
        ...state,
        tasks: state.tasks.map((task, index) =>
          index === action.payload
            ? { ...task, favorite: !task.favorite }
            : task
        ),
      };
    default:
      return state;
  }
};

export default taskReducer;
