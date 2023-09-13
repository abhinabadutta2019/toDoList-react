// import AddTask from "./AddTask";

import { useState } from "react";

const Home = () => {
  //
  const [lists, setLists] = useState([
    { title: "Task 1", id: 1 },
    { title: "Task 2", id: 2 },
  ]);
  //
  let outerList = [];
  //
  const addTask = () => {
    const taskName = document.getElementById("taskId").value;
    //
    let maxId = -1;
    lists.forEach((task) => {
      if (task.id > maxId) {
        maxId = task.id;
      }
    });
    //
    const newObj = { title: taskName, id: maxId + 1 };
    //
    // Create a new array with the new object
    const newList = [...lists, newObj];

    //
    console.log(newList);
    //
    outerList = [...newList];
    setLists(newList);
  };
  console.log(outerList, "outerList");
  //
  return (
    <div>
      <h2>Home</h2>
      {/*  */}
      <form>
        <label>
          Enter task:
          <input type="text" id="taskId" />
        </label>
      </form>
      <button onClick={addTask}>Add task</button>
      {/*  */}
    </div>
  );
};

export default Home;
