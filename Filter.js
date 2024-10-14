import React from "react";

export default function Filter() {
  const arr = ["car", "bike", "lorry", "truck", "lamborghini"];
  //filter array that starts with letter l
  const filtered_array = arr.filter((name) => name.includes("l"));
  return (
    <div>
      {filtered_array.map((item) => (
        <li>{item}</li>
      ))}
    </div>
  );
}
