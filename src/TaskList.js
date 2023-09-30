import { useState } from "react";

const TaskList = ({ todos, updateTitle }) => {
  return (
    <>
      {todos.map((todo) => {
        return (
          <li key={todo.id}>
            {/* {todo.title} */}
            <Task todo={todo} updateTitle={updateTitle} />
          </li>
        );
      })}
    </>
  );
};

//

const Task = ({ todo, updateTitle }) => {
  //
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedtitle] = useState(todo.title);
  //

  const editHandler = () => {
    setIsEditing(true);
  };
  //
  const inputFieldHandler = (e) => {
    // console.log(e.target.value);

    console.log(todo);
    //
    setEditedtitle(e.target.value);
  };
  //
  const saveButtonHandler = () => {
    const updatedTodoObj = { ...todo, title: editedTitle };
    updateTitle(updatedTodoObj);

    console.log(todo);
    //
    setIsEditing(false);
  };
  //

  //
  let content;

  if (isEditing) {
    content = (
      <>
        <input value={editedTitle} onChange={inputFieldHandler} />

        <button onClick={saveButtonHandler}>save</button>
      </>
    );
  } else {
    content = (
      <>
        {todo.title}
        <button onClick={editHandler}>edit button</button>
      </>
    );
  }

  //
  return (
    <>
      <label>
        <input type="checkbox" checked={todo.done} />
      </label>

      {content}
    </>
  );
};

//
export default TaskList;
