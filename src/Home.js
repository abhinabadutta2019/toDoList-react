// import AddTask from "./AddTask";

import { useState } from "react";

const Home = () => {
  //
  const [lists, setLists] = useState([]);
  //

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

    setLists(newList);
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
      <ul>
        {lists.map((task) => (
          <li key={task.id}>{task.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
