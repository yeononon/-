import { useState } from "react";

function App() {
  const [value, setValue] = useState("");
  const [input, setInput] = useState("");
  const PlusNumber = () => {
    setValue(value + 1);
  };
  const MinusNumber = () => {
    setValue(value - 1);
  };
  const InputNumber = (e) => {
    setValue(Number(e.target.value));
  };

  // const EnterNumber = (e) => {
  //   setValue(0);
  //   //   if (e.key === "Enter") {
  //   //     const num = Number(input);
  //   //     if (Number.isInteger(num)) setValue(num);
  //   //   }
  // };

  return (
    <div className="App">
      <div>Current Number: {value}</div>
      <label>Put number</label>
      <input
        type="text"
        placeholder="숫자를 입력해주세요"
        value={value}
        onChange={InputNumber}
        // onKeyDown={EnterNumber}
      ></input>
      <br></br>
      <button onClick={PlusNumber}>+</button>
      <button onClick={MinusNumber}>-</button>
    </div>
  );
}

export default App;
