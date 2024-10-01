import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../redux/reducers/authReducers"; // Adjust path if necessary
import "./Login.css";

const DUMMY_CREDENTIALS = {
  username: "user",
  password: "password123",
};

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();

  const handleLogin = () => {
    if (
      username === DUMMY_CREDENTIALS.username &&
      password === DUMMY_CREDENTIALS.password
    ) {
      dispatch(loginUser(username));
    } else {
      setError("Invalid credentials");
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <div className="credentials-info">
        <p>Use the following credentials:</p>
        <p>
          <strong>Username:</strong> user
        </p>
        <p>
          <strong>Password:</strong> password123
        </p>
      </div>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
      {error && <p className="error-message">{error}</p>}
    </div>
  );
}

export default Login;
