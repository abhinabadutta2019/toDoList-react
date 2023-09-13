import { useState } from "react";
import TaskList from "./TaskList";
import Counter from "./Test-Counter";

const Home = () => {
  //
  const [lists, setLists] = useState([
    { title: "Task 1", id: 1 },
    { title: "Task 2", id: 2 },
  ]);
  //
  const handleDelete = (id) => {
    const newLists = lists.filter((task) => task.id !== id);
    //
    setLists(newLists);
  };
  //
  return (
    <div>
      <h2>Home</h2>
      <TaskList lists={lists} handleDelete={handleDelete} />
      <br />
      <Counter />
    </div>
  );
};

export default Home;
