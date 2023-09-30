import { useState } from "react";

const Task = ({ todo, deleteFunc, onEditTodo }) => {
  const [isEditing, setisEditing] = useState(false);
  const [updateInputValue, setUpdateInputValue] = useState(todo.title);
  //

  const editHandler = () => {
    setisEditing(true);
  };
  //
  const updateInput = (e) => {
    setUpdateInputValue(e.target.value);
  };
  //
  const submitUpdate = () => {
    // console.log(updateInputValue);

    const updatedTodo = { ...todo, title: updateInputValue };

    // console.log(updatedTodo, "updatedTodo");

    onEditTodo(updatedTodo);
    setisEditing(false);
  };
  //
  const checkBoxHandler = () => {
    // console.log("HI");
    //
    const updatedTodo = { ...todo, seen: !todo.seen };

    onEditTodo(updatedTodo);
  };
  //

  let content;

  if (isEditing) {
    // console.log("Hi");

    content = (
      <>
        <input value={updateInputValue} onChange={updateInput} />
        <button onClick={submitUpdate}>save update</button>
      </>
    );
  } else {
    content = (
      <>
        {todo.title}
        <button onClick={editHandler}>edit</button>
      </>
    );
  }

  //
  return (
    //
    <>
      <input type="checkbox" checked={todo.seen} onChange={checkBoxHandler} />
      {content}
      <button
        onClick={() => {
          deleteFunc(todo);
        }}
      >
        delete
      </button>
    </>
  );
};

export default Task;
