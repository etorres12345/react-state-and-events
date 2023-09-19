import "./App.css";
import { useState } from "react";

function App() {
  let [count, setCount] = useState(0);
  console.log(count);
  function handleIncrement() {
    setCount(count + 1);
  }

  function handleDecrement() {
    if (count === 0) return;
    setCount(count - 1);
  }

  return (
    <div className="App">
      <button onClick={handleIncrement}>increment</button>
      {count}
      <button onClick={handleDecrement}>decrement</button>
    </div>
  );
}
export default App;
