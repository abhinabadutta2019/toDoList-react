import { useState } from "react";
import TaskList from "./TaskList";

const Home = () => {
  //
  const [lists, setLists] = useState([
    { title: "Task 1", id: 1 },
    { title: "Task 2", id: 2 },
  ]);
  //
  return (
    <div>
      <h2>Home</h2>
      <TaskList lists={lists} />
    </div>
  );
};

export default Home;
