import React, { useState } from "react";
function App() {
  const [list, setList] = useState([]);
  const [input, setInput] = useState("");
  const addtodo = (todo) => {
    const newTodo = {
      id: Math.random(),
      todo: todo,
    };
    setList([...list, newTodo]);
    setInput("");
  };
  return (
    <div>
      <h1>Todolist!</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={() => addtodo(input)}>Add</button>
      <ul>
        {list.map((todo) => (
          <li key={todo.id}>
            {todo.todo}
            <button>&times;</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
