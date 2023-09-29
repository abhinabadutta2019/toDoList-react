import { useState } from "react";
import TaskList from "./TaskList";

const Home = () => {
  const initialTodos = [
    { id: 0, title: "Buy milk", done: true, inputValue: "" },
    { id: 1, title: "Eat tacos", inputValue: "" },
    { id: 2, title: "Brew tea", inputValue: "" },
  ];

  const [todos, setTodos] = useState(initialTodos);
  //
  // const [buttonMap, setButtonMap] = useState(todos);
  //

  //
  const inputEvent = (e, todoId) => {
    // console.log(e.target.value);
    // console.log(todoId, "todoId");

    const mapValue = todos.map((todo) => {
      if (todo.id == todoId) {
        console.log(todo.id, todoId);
        return { ...todo, inputValue: e.target.value };
      } else {
        return todo;
      }
    });
    // setButtonMap(mapValue);

    setTodos(mapValue);

    console.log(todos, "todos");

    // console.log(mapValue, "mapValue");
    // console.log(buttonClick, "buttonClick");
  };
  //
  const buttonEvent = () => {
    // setTodos(buttonMap);

    //
    const mapValue = todos.map((todo) => {
      if (todo.title != todo.inputValue && todo.inputValue.length > 0) {
        return { ...todo, title: todo.inputValue };
      } else {
        return todo;
      }
    });
    setTodos(mapValue);
  };
  //
  // const

  //
  return (
    <>
      <TaskList
        todos={todos}
        inputEvent={inputEvent}
        buttonEvent={buttonEvent}
      />
    </>
  );
};

export default Home;
