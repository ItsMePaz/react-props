import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  function increaseCounter() {
    setCount(count + 1);
  }

  function decreaseCounter() {
    setCount(count - 1);
  }

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increaseCounter}>Increment</button>
      <button onClick={decreaseCounter}>Decrement</button>
    </div>
  );
}

export default Counter;
