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

  const handleEditTodo = (updatedTodo) => {
    // updatedTodo parameter-- hole-- updated value , jeta component theke asbe
    const mapValue = todos.map((todo) => {
      if (todo.id === updatedTodo.id) {
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
    <div>
      <h1>Task List</h1>
      <TaskList todos={todos} onEditTodo={handleEditTodo} />
    </div>
  );
};

export default Home;
