import React, { useState, useEffect } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  useEffect(() => console.log(count), [count]);

  return (
    <div>
      <center>
        <button onClick={() => setCount(count + 1)}>Change</button>
        <h1>you clicked {count} times</h1>
      </center>
    </div>
  );
}
