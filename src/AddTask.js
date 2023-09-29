import React, { useState } from "react";

export default function Task({ todo, onEditTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(todo.title);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    onEditTodo({
      ...todo,
      title: editedTitle,
    });
    setIsEditing(false);
  };

  const handleInputChange = (e) => {
    setEditedTitle(e.target.value);
  };

  let content;
  if (isEditing) {
    content = (
      <div>
        <input type="text" value={editedTitle} onChange={handleInputChange} />
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

  return <div>{content}</div>;
}
