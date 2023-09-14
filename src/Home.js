// import AddTask from "./AddTask";

import { useState } from "react";

const Home = () => {
  //
  const [lists, setLists] = useState([]);
  const [idCounter, setIdCounter] = useState(1);
  //

  //
  const addTask = () => {
    const taskName = document.getElementById("taskId").value;
    //

    //
    const newObj = { title: taskName, id: idCounter };
    //
    // Create a new array with the new object
    const newList = [...lists, newObj];

    //
    console.log(newList);
    //

    setLists(newList);
    //
    // Increment the ID counter for the next task
    setIdCounter(idCounter + 1);
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
