import { useState } from "react";

const Task = ({ todo, onEditTodo }) => {
  //
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(todo.title);

  //edit button func
  const handleEditClick = () => {
    setIsEditing(true);
  };
  // save button func
  const handleSaveClick = () => {
    onEditTodo({
      ...todo,
      title: editedTitle,
    });
    setIsEditing(false);
  };
  // getting the input field value
  const handleInputChange = (e) => {
    setEditedTitle(e.target.value);
  };
  // initializing content
  let content;

  //
  if (isEditing) {
    // updating content
    content = (
      <div>
        <input value={editedTitle} onChange={handleInputChange} />
        <button onClick={handleSaveClick}>Save</button>
      </div>
    );
  } else {
    content = (
      <div>
        <span>{todo.title}</span>
        <button onClick={handleEditClick}>Edit</button>
      </div>
    );
  }
  //
  return <div>{content}</div>;
};

export default Task;
