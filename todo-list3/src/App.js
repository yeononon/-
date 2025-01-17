import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

function App() {
  const [text, setText] = useState("");
  // 1. 상태 함수 가져온다
  const dispatch = useDispatch()
  // 2. 상태 가져온다
  const todos =useSelector((state)=> )

  const handleAddtodo = () => {};
  const handleDeletetodo = () => {};
  return (
    <div className="App">
      <h1>Todo-list</h1>
      <input
        type="text"
        onChange={(e) => {
          setText(e.target.value);
        }}
        placeholder="내용을 입력하세요"
      ></input>
      <button onClick={handleAddtodo}>Add</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={handelDeletetodo}>Delete</button>
          </li>
        ))}
        {/* 대상.map() */}
        {/* map((객체 이름)=>(li 더미)) -> 그냥 괄호임 주의*/}
        {/* li안에 {todo.text}랑 <button>을 넣어야 함 */}

      </ul>
    </div>
  );
}

export default App;
