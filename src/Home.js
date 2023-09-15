import AddTask from "./AddTask";
import { useState } from "react";
import TaskList from "./TaskList";
const Home = () => {
  //
  const [count, setCount] = useState(0);
  //
  const handleClick = () => {
    setCount(count + 1);
  };
  //
  //
  const reduceNumber = () => {
    setCount(count - 1);
  };

  return (
    <>
      <AddTask handleClick={handleClick} count={count} />
      <TaskList reduceNumber={reduceNumber} count={count} />
    </>
  );
  //
};

export default Home;
