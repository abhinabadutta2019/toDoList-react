// import AddTask from "./AddTask";

import { useState } from "react";

const Home = () => {
  //
  const taskArray = [];
  //
  const [taskId, setTaskId] = useState(1); // Initialize taskId with 1
  //
  const addTask = () => {
    const taskName = document.getElementById("taskId").value;
    // console.log(taskName, "taskName");

    //
    // Create a new task object with the current taskId
    const newObj = { id: taskId, name: taskName };

    // Increment taskId for the next task
    setTaskId(taskId + 1);
    //

    //
    taskArray.push(newObj);
    //
    console.log(taskArray, "taskArray");
    //
  };
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
