import { useState } from "react";
import React from "react";

export default function App() {
  const [user, setUser] = useState("");
  const handler = (e) => {
    setUser(e.target.value);
  };
  return (
    <div>
      <center>
        <input
          type="text"
          placeholder="Username"
          value={user}
          name="user"
          onChange={handler}
        />
        <br />
        {user}
      </center>
    </div>
  );
}
