import { useState } from "react";
import TaskList from "./TaskList";

const initialTodos = [
  { id: 0, title: "Buy milk", done: true },
  { id: 1, title: "Eat tacos", done: false },
  { id: 2, title: "Brew tea", done: true },
];

const Home = () => {
  //
  const [todos, setTodos] = useState(initialTodos);

  //
  const updateTitle = (updatedTodo) => {
    const mapValue = todos.map((todo) => {
      if (todo.id === updatedTodo.id) {
        //etar jonno error aschilo
        // return (todo.title = updatedTodo.title);
        return updatedTodo;
      } else {
        return todo;
      }
    });
    //
    setTodos(mapValue);
  };
  //
  return (
    <>
      <TaskList todos={todos} updateTitle={updateTitle} />
    </>
  );
};

export default Home;
