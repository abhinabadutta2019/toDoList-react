import { useState } from "react";
import TaskList from "./TaskList";
import AddTask from "./AddTask";

const initialTodos = [
  { id: 0, title: "Buy milk", seen: true },
  { id: 1, title: "Eat tacos", seen: false },
  { id: 2, title: "Brew tea", seen: true },
];

const Home = () => {
  //
  const [todos, setTodos] = useState(initialTodos);
  //

  //
  const deleteFunc = (sendTodo) => {
    const filterValue = todos.filter((todo) => {
      if (todo.id != sendTodo.id) {
        return todo;
      }
    });
    setTodos(filterValue);
  };

  //
  const onEditTodo = (editedTodo) => {
    const mapValue = todos.map((todo) => {
      if (todo.id == editedTodo.id) {
        console.log(editedTodo, "editedTodo");
        return (todo = editedTodo);
      } else {
        return todo;
      }
    });
    setTodos(mapValue);
  };

  // add task
  const addNewTaskHandler = (updatedTodo) => {
    setTodos(updatedTodo);
  };

  //

  //
  return (
    <>
      <h3>Add task</h3>
      <AddTask todos={todos} addNewTaskHandler={addNewTaskHandler} />
      {/*  */}
      <h3>All tasks</h3>
      <TaskList todos={todos} deleteFunc={deleteFunc} onEditTodo={onEditTodo} />
    </>
  );
};

///////////////////////////////

export default Home;
