//
import { useState } from "react";
//
const AddTask = () => {
  //

  const [count, setCount] = useState(0);
  //
  const handleClick = () => {
    setCount(count + 1);
  };
  //
  // console.log("button clicked " + count + "times");
  //
  return <button onClick={handleClick}>button clicked {count} times</button>;
  //
};

export default AddTask;
