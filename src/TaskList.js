import { useState } from "react";

const TaskList = () => {
  //
  const [count, setCount] = useState(0);
  //
  const reduceNumber = () => {
    setCount(count - 1);
  };
  //
  return <button onClick={reduceNumber}>button clicked {count} times</button>;
};

export default TaskList;
