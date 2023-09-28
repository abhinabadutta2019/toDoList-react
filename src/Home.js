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
  // const inputHandler = (e) => {
  //   console.log(e.target.value);
  //   //this to get input field value
  //   setinputValue(e.target.value);

  //   // console.log(todos, "todos");
  // };

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

  const buttonSubmit = (todoId) => {
    // console.log("Hi");
    //
    //
    const mapValue = todos.map((oneItem) => {
      // console.log(oneItem);
      if (oneItem.id == todoId) {
        // console.log(oneItem.id, "oneItem.id");
        // console.log(todoId, "todoId");
        return { ...oneItem, title: inputValue };
      } else {
        return oneItem;
      }
    });

    setTodos(mapValue);
  };

  return (
    <>
      <AddTask inputNewTask={inputNewTask} addNewTask={addNewTask} />
      {/*  */}
      <TaskList
        todos={todos}
        // inputHandler={inputHandler}
        buttonSubmit={buttonSubmit}
        onCheckMark={onCheckMark}
        deleteHandle={deleteHandle}
      />
    </>
  );
};

//

//

export default Home;
