import React, { useState } from "react";
import Profile from "./Profile";
import "../style/login.css";
const Login = () => {
  const [user, setUser] = useState({ username: "", password: "" });
  const [loggedIn, setLoggedIn] = useState(false);
  const [error, setError] = useState("");
  function formHandle(e) {
    const { name, value } = e.target;
    setUser((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }
  function formSubmit(e) {
    e.preventDefault();
    fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: `${user.username}`,
        password: `${user.password}`,
      }),
    })
      .then((res) => {
        if (res.status === 400) {
          setError("Username or password is wrong");
          return;
        }
        return res.json();
      })
      .then((res) => {
        if (res) {
          localStorage.setItem("userId", JSON.stringify(res));
          setError("");
          setLoggedIn(true);
        }
      });
  }

  return (
    <div>
      <div className="colordr"></div>
      {loggedIn ? (
        <Profile />
      ) : (
        <>
          <div className="container">
            <p>Welcome back!👋</p>
            <h3>Sign up to your account</h3>
            <form onSubmit={formSubmit}>
              <label for="email">username</label>
              <input
                type="text"
                name="username"
                required
                onChange={formHandle}
                value={user.username}
              />
              <label for="password">Password</label>
              <input
                type="password"
                name="password"
                required
                onChange={formHandle}
                value={user.password}
              />
              {/* Form inputs and submit button */}
              <button type="submit">CONTINUE</button>
              <p style={{ color: "red", textAlign: "center" }}>{error}</p>
            </form>
            <h5>Forget your password?</h5>
          </div>
        </>
      )}
    </div>
  );
};

export default Login;
