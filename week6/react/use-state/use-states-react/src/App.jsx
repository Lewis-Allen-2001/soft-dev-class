import { useState } from "react";
import "./App.css";
import SimpleVersion from "./simpleversion";

function App() {
  let [count, setCount] = useState(0);

  //function handleIncrement() {
  // count = count + 1;
  //console.log(count);
  // }

  function handleIncrement() {
    setCount(count + 1);
  }

  function handleShrikage() {
    setCount(count - 1);
  }

  function handleReset() {
    setCount(0);
  }

  return (
    <div>
      <button onClick={handleIncrement}> +1 </button>

      <button onClick={handleShrikage}>-1</button>

      <p onClick={handleReset}>
        You have clicked {count} times! (Click here to reset count!)
      </p>

      <SimpleVersion />
    </div>
  );
}

export default App;
