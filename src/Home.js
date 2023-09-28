import { useState } from "react";
import { TaskList } from "./TaskList";
import { AddTask } from "./AddTask";

let nextId = 3;
const initialTodos = [
  { id: 0, title: "Buy milk", done: true, inputValue: "" },
  { id: 1, title: "Eat tacos", done: false, inputValue: "" },
  { id: 2, title: "Brew tea", done: false, inputValue: "" },
];

const Home = () => {
  const [todos, setTodos] = useState(initialTodos);

  // const [inputValue, setinputValue] = useState("");

  //////////////////////////////////////////////
  const [newTaskTitle, setNewTaskTitle] = useState("");

  ////////////////////////////////////////////////////

  //
  const addNewTask = () => {
    // console.log(newTaskTitle, "newTaskTitle");

    const newObj = {
      id: nextId++,
      title: newTaskTitle,
      done: false,
      inputValue: "",
    };
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
      return oneItem.id !== todoId;
    });

    setTodos(filterValue);
  };
  //
  const onCheckMark = (todoId) => {
    // console.log("HI");

    const mapValue = todos.map((oneItem) => {
      if (oneItem.id === todoId) {
        return { ...oneItem, done: !oneItem.done };
      } else {
        return oneItem;
      }
    });
    setTodos(mapValue);
  };
  //
  // the input field of each task
  const inputHandler = (e, todoId) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === todoId) {
        return { ...todo, inputValue: e.target.value };
      } else {
        console.log(todo, "todo");
        return todo;
      }
    });
    setTodos(updatedTodos);
  };

  //
  const buttonSubmit = (todoId) => {
    // console.log("Hi");
    //
    //
    const mapValue = todos.map((oneItem) => {
      // console.log(oneItem);
      if (oneItem.id === todoId && oneItem.inputValue.length > 0) {
        // console.log(oneItem.inputValue, "oneItem.inputValue");
        // console.log(oneItem.id, "oneItem.id");
        // console.log(todoId, "todoId");
        return { ...oneItem, title: oneItem.inputValue };
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
        inputHandler={inputHandler}
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
