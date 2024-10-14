import { useState } from "react";
import React from "react";

export default function Usestates() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const onChange = (e) => {
    const { name, value } = e.target;

    if (name === "username") {
      setUser(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Username:", user);
    console.log("Password:", password);
  };

  return (
    <div>
      <center>
        <form onSubmit={submitHandler}>
          <input
            type="text"
            name="username"
            value={user}
            placeholder="Username"
            onChange={onChange}
          />
          <br />
          <input
            type="password"
            name="password"
            value={password}
            placeholder="Password"
            onChange={onChange}
          />
          <br />
          <input type="submit" name="submit" value="Submit" />
        </form>
      </center>
    </div>
  );
}
