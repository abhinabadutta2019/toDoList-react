import { useState } from "react";
import { TaskList } from "./TaskList";
import { AddTask } from "./AddTask";

let nextId = 3;
const initialTodos = [
  { id: 0, title: "Buy milk", done: true },
  { id: 1, title: "Eat tacos", done: false },
  { id: 2, title: "Brew tea", done: false },
];

const Home = () => {
  const [todos, setTodos] = useState(initialTodos);

  const [inputValue, setinputValue] = useState("");

  //////////////////////////////////////////////
  const [newTaskTitle, setNewTaskTitle] = useState("");

  ////////////////////////////////////////////////////

  //
  const addNewTask = () => {
    // console.log(newTaskTitle, "newTaskTitle");

    const newObj = { id: nextId++, title: newTaskTitle, done: false };
    //
    const updatedList = [...todos, newObj];
    //
    setTodos(updatedList);
  };

  //
  const inputNewTask = (e) => {
    setNewTaskTitle(e.target.value);
  };

  //////////////////////////////////////////////////////

  //
  const deleteHandle = (todoId) => {
    // console.log("Hi");

    const filterValue = todos.filter((oneItem) => {
      if (oneItem.id != todoId) {
        return oneItem;
      }
    });

    setTodos(filterValue);
  };
  //
  const onCheckMark = (todoId) => {
    // console.log("HI");

    const mapValue = todos.map((oneItem) => {
      if (oneItem.id == todoId) {
        return { ...oneItem, done: !oneItem.done };
      } else {
        return oneItem;
      }
    });
    setTodos(mapValue);
  };
  //

  return (
    <>
      <AddTask inputNewTask={inputNewTask} addNewTask={addNewTask} />
      {/*  */}
      <TaskList
        todos={todos}
        onCheckMark={onCheckMark}
        deleteHandle={deleteHandle}
        // inputHandler={inputHandler}
        // buttonSubmit={buttonSubmit}
      />
    </>
  );
};

//

//

export default Home;
