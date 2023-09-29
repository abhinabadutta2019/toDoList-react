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
  return (
    <>
      <TaskList todos={todos} />
    </>
  );
};

export default Home;
