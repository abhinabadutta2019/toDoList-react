import { useState } from "react";

const Task = ({ todo, deleteFunc }) => {
  const [isEditing, setisEditing] = useState(false);
  const [updateInputValue, setUpdateInputValue] = useState("");
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
    console.log(updateInputValue);
  };
  //

  let content;

  if (isEditing) {
    // console.log("Hi");

    content = (
      <>
        <input onChange={updateInput} />
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
