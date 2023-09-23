import { useState } from "react";
import TaskList from "./TaskList";
import Counter from "./Test-Counter";
import AddTask from "./AddTask";

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
  /////////////\\\\\\\\\\\\\\\/////////
  const addTask = () => {
    // console.log();
    const taskNameValue = document.getElementById("taskName").value;
    //

    let maxId = -1;
    lists.forEach((task) => {
      if (task.id > maxId) {
        maxId = task.id;
      }
    });
    //
    // console.log(maxId);
    const newObj = { title: taskNameValue, id: maxId + 1 };
    // console.log(newObj, "newObj");

    // Create a new array with the new object
    const newList = [...lists, newObj];
    //
    console.log(newList, "newList");

    //
    setLists(newList);
  };
  //

  //
  return (
    <div>
      <h2>Home</h2>

      <AddTask addTask={addTask} />
      <br />
      <br />
      {/*  */}
      <TaskList lists={lists} handleDelete={handleDelete} />
      <br />
      <Counter />
    </div>
  );
};

export default Home;
