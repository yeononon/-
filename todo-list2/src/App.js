import "./App.css";
import TodoList from "./component/TodoList";
import React, { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  // todos.map을 할 것이기에 배열 형태로 만들어줘야 함함
  return (
    <div className="App">
      <h1>To-do List</h1>
      <TodoList todos={todos} setTodos={setTodos}></TodoList>
    </div>
  );
}

export default App;
