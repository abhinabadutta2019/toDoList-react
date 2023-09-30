import { useState } from "react";
import TaskList from "./TaskList";

let nextId = 3;
const initialTodos = [
  { id: 0, title: "Buy milk", seen: true },
  { id: 1, title: "Eat tacos", seen: false },
  { id: 2, title: "Brew tea", seen: true },
];

const Home = () => {
  //
  const [todos, setTodos] = useState(initialTodos);
  //
  const [formInput, setFormInput] = useState("");
  //
  const deleteFunc = (sendTodo) => {
    const filterValue = todos.filter((todo) => {
      if (todo.id != sendTodo.id) {
        return todo;
      }
    });
    setTodos(filterValue);
  };
  // for new task
  const formInputHandler = (e) => {
    // console.log(e.target.value);
    setFormInput(e.target.value);
  };
  // for new task
  const formSubmit = (e) => {
    // to stop reload
    e.preventDefault();
    // console.log(formInput);
    const newObj = { id: nextId++, title: formInput, seen: false };

    // console.log(newObj, "newObj");

    const updatedTodo = [...todos, newObj];
    // console.log(updatedTodo, "updatedTodo");
    setTodos(updatedTodo);
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

  //
  return (
    <>
      <h3>Add task</h3>
      <AddTask formSubmit={formSubmit} formInputHandler={formInputHandler} />
      {/*  */}
      <h3>All tasks</h3>
      <TaskList todos={todos} deleteFunc={deleteFunc} onEditTodo={onEditTodo} />
    </>
  );
};

///////////////////////////////

const AddTask = ({ formInputHandler, formSubmit }) => {
  // console.log(todos, "todos");
  //

  //
  return (
    <>
      <input onChange={formInputHandler} />

      <button onClick={formSubmit}>submit</button>
    </>
  );
};
//

export default Home;
