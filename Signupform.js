import React, { useState } from "react";
import axios from "axios";
export default function Signupform() {
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { username, email, password, confirmPassword } = data;

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (username.length <= 5) {
      alert("min 5 characters");
    } else if (password !== confirmPassword) {
      alert("not matching password");
    } else {
      axios
        .post(
          "https://react-f4ab0-default-rtdb.firebaseio.com/register.json",
          data
        )
        .then(() => alert("Submitted successfully"));
    }
  };

  return (
    <div>
      <center>
        <form onSubmit={submitHandler}>
          <input
            type="text"
            name="username"
            value={username}
            onChange={changeHandler}
            placeholder="Username"
          />
          <br />
          <input
            type="email"
            name="email"
            value={email}
            onChange={changeHandler}
            placeholder="Email"
          />
          <br />
          <input
            type="password"
            name="password"
            value={password}
            onChange={changeHandler}
            placeholder="Password"
          />
          <br />
          <input
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={changeHandler}
            placeholder="Confirm Password"
          />
          {password === confirmPassword ? (
            <p style={{ color: "red" }}>matched</p>
          ) : (
            <p>not matched</p>
          )}
          <br />
          <input type="submit" />
        </form>
      </center>
    </div>
  );
}
