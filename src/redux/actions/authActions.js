export const loginUser = (username) => (dispatch) => {
  // Mock login action
  dispatch({ type: "LOGIN_SUCCESS", payload: username });
};

export const logoutUser = () => (dispatch) => {
  dispatch({ type: "LOGOUT" });
};
