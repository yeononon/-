// 여기에 slice를 만들어야 함.
// 1. const todoSlice= createSlice()
// createSlice(안 괄호에 {중괄호})
const todoSlice = createSlice({
  // 1. name
  name: "todos",
  // 2. 초기상태
  InitialState,
  // 3. 리듀서 함수 (reducer가 상태함수, dispatch는 액션을 리듀서로 전달하는 역할할 )
  reducers: {
    addTodo: (state, action) => {
      state.todos.push({
        id: Date.now(),
      });
    },
  },
});
