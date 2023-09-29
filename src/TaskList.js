import React from "react";
import Task from "./AddTask";

export default function TaskList({ todos, onEditTodo }) {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <Task todo={todo} onEditTodo={onEditTodo} />
        </li>
      ))}
    </ul>
  );
}
