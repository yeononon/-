import React, { useState } from "react";

const TodoList = ({ todos, dispatch }) => {
  const [newtodo, setNewtodo] = useState("");

  const Addtodo = () => {
    // console.log(newtodo);
    dispatch({ type: "ADD_TODO", payload: newtodo });
    setNewtodo("");
  };
  const Deletetodo = (index) => {
    dispatch({ type: "DELETE_TODO", index });
  };
  return (
    <div>
      <input
        type="text"
        value={newtodo}
        onChange={(e) => {
          setNewtodo(e.target.value);
        }}
      ></input>
      {/* 여기는 useStae나 useReducer 다 동일함(action에는 추가 행동만 넣었기 때문에에) */}
      <button onClick={Addtodo}>Add</button>
      {/* 여기도 함수를 넣는 건 똑같음 함수 구성이 달라질 뿐 */}
      <ul>
        {todos.map((todo, index) => {
          return (
            <li key={index}>
              {todo.text}
              <button onClick={() => Deletetodo(index)}>Remove</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TodoList;
// #1. useReducer 이해가 잘 안됨
// #2. todolist 틀 구성하는 부분: onClick{()=>함수}랑 onClikc{함수} 차이를 잘 모르겠었음
// -> delete는 인자를 전달해야 하기에 화살표 함수 형태로 작성함(index 위치의 내용을 삭제함함)
// #3. props로 데이터 이동 방식도 몰랐음 /
// App.js에서 전체 상태관리, todolist.js에서 새로운 상태 관리
// useState 방식:
// useReducer 방식: state, action을 나누어서 작성
// 둘 다 현재 상태에서 변경하는 함수 작성, 함수 작성하는 공간에도 조금 차이가 있음음
