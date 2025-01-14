import React, { useState } from "react";

const TodoList = ({ todos, setTodos }) => {
  const [newtodo, setNewtodo] = useState("");
  const inputTodo = () => {
    setTodos([...todos, { text: newtodo }]);
    // #3. setTodos 하고 추가..
    console.log(newtodo);
    setNewtodo("");
  };
  const deleteTodo = (index) => setTodos(todos.filter((_, i) => i !== index));
  // #2. setTodos 하고 추가..
  return (
    <div className="todo-list">
      <input
        type="text"
        value={newtodo}
        // #1. value 꼭 연결해줘야함함
        onChange={(e) => setNewtodo(e.target.value)}
      ></input>
      <button onClick={inputTodo}>Add</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo.text}
            <button onClick={() => deleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
