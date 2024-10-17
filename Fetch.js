import { useState } from "react";
import React, { useEffect } from "react";

export default function Fetch() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  return (
    <div>
      {data.map((item) => (
        <li key={item.id}>{item.title}</li>
      ))}
    </div>
  );
}
