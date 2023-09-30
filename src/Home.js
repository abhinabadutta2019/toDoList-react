import { useState } from "react";
import TaskList from "./TaskList";

const initialTodos = [
  { id: 0, title: "Buy milk" },
  { id: 1, title: "Eat tacos" },
  { id: 2, title: "Brew tea" },
];

const Home = () => {
  //
  const [todos, setTodos] = useState(initialTodos);
  //
  return (
    <>
      <TaskList todos={todos} />
    </>
  );
};

export default Home;
