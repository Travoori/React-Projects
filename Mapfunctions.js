import React from "react";

export default function Mapfunctions() {
  const arr = ["react", "angular", "node", "typescript"];

  return (
    <div>
      {arr.map((value, index) => (
        <li>{value}</li>
      ))}
    </div>
  );
}
