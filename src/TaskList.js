import { useState } from "react";

const TaskList = ({
  todos,
  // inputHandler,
  buttonSubmit,
  onCheckMark,
  deleteHandle,
}) => {
  //
  const [inputValue, setinputValue] = useState("");
  //
  const inputHandler = (e) => {
    console.log(e.target.value);
    //this to get input field value
    setinputValue(e.target.value);

    // console.log(todos, "todos");
  };
  //
  return (
    <>
      <h3>All tasks</h3>
      {todos.map((todo) => (
        <li key={todo.id}>
          <button
            onClick={() => {
              deleteHandle(todo.id);
            }}
          >
            delete
          </button>
          <br />
          {todo.id}---- {todo.title}--
          {/* {todo.done.toString()} */}
          {<span>{todo.done ? "✅" : "❌"}</span>}
          {/* true false button */}
          <button
            onClick={() => {
              onCheckMark(todo.id);
            }}
          >
            checkMark
          </button>
          <p>
            <input
              onChange={(e) => {
                inputHandler(e);
              }}
            />

            <button
              onClick={() => {
                buttonSubmit(todo.id);
              }}
            >
              update
            </button>
          </p>
          <hr />
        </li>
      ))}
    </>
  );
};

export { TaskList };
