import { useState } from "react";

let nextId = 3;
const AddTask = ({ todos, addNewTaskHandler }) => {
  //
  const [formInput, setFormInput] = useState("");
  // console.log(todos, "todos");
  //
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
    // setTodos(updatedTodo);
    //
    addNewTaskHandler(updatedTodo);
  };
  //
  return (
    <>
      <input onChange={formInputHandler} />

      <button onClick={formSubmit}>submit</button>
    </>
  );
};
//

export default AddTask;
