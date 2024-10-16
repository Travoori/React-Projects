import React, { useState } from "react";

export default function Loginform() {
  const [data, setData] = useState({
    username: "",
    password: "",
  });

  const { username, password } = data;

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value }); // Correct state update
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(data); // Logs the form data
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
          />
          <br />
          <input
            type="password"
            name="password"
            value={password}
            onChange={changeHandler}
          />
          <br />
          <input type="submit" name="submit" />
        </form>
      </center>
    </div>
  );
}
