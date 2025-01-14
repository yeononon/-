import "./App.css";
import TodoList from "./components/todoList";

import React, { useReducer } from "react";

export const TodoReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, { text: action.payload }];
    case "DELETE_TODO":
      return state.filter((_, index) => index !== action.index);
    // case 'END_TODO':
    default:
      return state;
  }
};

function App() {
  const initialState = [];
  // #1. 전체 상태 관리리
  const [todos, dispatch] = useReducer(TodoReducer, initialState);
  // useState의 경우 const [todos, setTodos] = useState()
  // useReducer의 경우 const [todos, disaptch] = useReducer()
  // useContext의 경우 const {todos, setTodos/dispatch} = useContext()
  // -> 상태는 대괄호, 내용 전달은 중괄호!!
  return (
    // #2. 전체 구조 관리리
    <div className="App">
      <h1>To-Do List</h1>
      <TodoList todos={todos} dispatch={dispatch}></TodoList>
      {/* todos와 dispatch를 todoList라는 하위 컴포넌트에 전달 */}
    </div>
  );
}

export default App;

// app.js에서는 전체 구조와 상태 관리!
