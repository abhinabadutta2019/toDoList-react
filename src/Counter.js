import { useState } from "react";

function Counter() {
  // Declare a state variable 'count' and a function 'setCount'
  // 'count' initializes to 0, and 'setCount' is used to update it
  const [count, setCount] = useState(0);

  // Event handler to increment 'count' when a button is clicked
  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default Counter;
