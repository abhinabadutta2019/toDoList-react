import { useState } from "react";
import TaskList from "./TaskList";

const Home = () => {
  const initialTodos = [
    { id: 0, title: "Buy milk", done: true },
    { id: 1, title: "Eat tacos", done: false },
    { id: 2, title: "Brew tea", done: false },
  ];

  const [todos, setTodos] = useState(initialTodos);
  //
  const [buttonMap, setButtonMap] = useState(todos);

  //
  const inputEvent = (e, todoId) => {
    // console.log(e.target.value);
    // console.log(todoId, "todoId");

    const mapValue = todos.map((todo) => {
      if (todo.id == todoId) {
        console.log(todo.id, todoId);
        return { ...todo, title: e.target.value };
      } else {
        return todo;
      }
    });
    setButtonMap(mapValue);
    // console.log(buttonClick, "buttonClick");
  };
  //
  const buttonEvent = () => {
    setTodos(buttonMap);
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
