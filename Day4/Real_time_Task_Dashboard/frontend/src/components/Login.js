// src/components/Login.js

import React, { useState, useContext } from "react";
import { UserContext } from "../context/UserContext";
import "./Login.css";

function Login() {
  const { setUser } = useContext(UserContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check for empty fields
    if (username.trim() === "" || password.trim() === "") {
      alert("Username and Password are required.");
      return;
    }

    // Validate default credentials (fixed issue with extra spaces)
    if (username.trim() === "Palgun" && password === "Palgun1234") {
      setUser({ username: "Palgun", password: "Palgun1234", role: "member" });
    } else if (username.trim() === "admin" && password === "admin1234") {
      setUser({ username: "admin", password: "admin1234", role: "admin" });
    } else {
      alert("Invalid credentials. Please use the default credentials.");
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label>Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
