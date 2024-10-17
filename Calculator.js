import React, { useState } from "react";
import { evaluate } from "mathjs"; // Import mathjs for safe evaluation

export default function Calculator() {
  const [input, setInput] = useState(""); // To capture the user input
  const [result, setResult] = useState(""); // To store and display the result

  const changeHandler = (e) => {
    setInput(e.target.value); // Capture user input from the text field
  };

  const calculateResult = () => {
    try {
      const safeResult = evaluate(input); // Safely evaluate the expression
      setResult(safeResult); // Set the result to display it on screen
    } catch (error) {
      setResult("Invalid expression"); // Display error if input is invalid
    }
  };

  return (
    <div>
      <center>
        <input
          type="text"
          value={input}
          name="input"
          onChange={changeHandler}
          placeholder="Enter calculation"
        />

        <br />
        <button onClick={calculateResult}>Calculate</button>
        <br />
        {/* Display result here as plain text after the button */}
        <p>Result: {result}</p>
        <button onClick={() => setInput(input + "1")}>1</button>
        <button onClick={() => setInput(input + "2")}>2</button>
        <button onClick={() => setInput(input + "3")}>3</button>
        <br />
        <button onClick={() => setInput(input + "4")}>4</button>
        <button onClick={() => setInput(input + "5")}>5</button>
        <button onClick={() => setInput(input + "6")}>6</button>
        <br />
        <button onClick={() => setInput(input + "7")}>7</button>
        <button onClick={() => setInput(input + "8")}>8</button>
        <button onClick={() => setInput(input + "9")}>9</button>
        <br />
        <button onClick={() => setInput(input + "0")}>0</button>
        <button onClick={() => setInput(input + "+")}>+</button>
        <button onClick={() => setInput(input + "-")}>-</button>
        <button onClick={() => setInput(input + "*")}>*</button>
        <button onClick={() => setInput(input + "/")}>/</button>
        <button onClick={() => setInput("")}>clr</button>
      </center>
    </div>
  );
}
