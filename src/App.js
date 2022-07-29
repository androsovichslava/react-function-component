import React, {useState} from "react";
function App() {
  const [value, setValue] = useState(0);
  const increment = () => {
    setValue(value+1)
  }
  const decrement = () => {
    setValue(value-1)
  }
  return (
    <div className="App">
      <button onClick={increment}>
           Инкремент
      </button>
      <span>{value}</span>
      <button onClick={decrement}>
           Декремент
      </button>
    </div>
  );
}

export default App;
