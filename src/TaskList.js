const TaskList = ({
  todos,
  inputHandler,
  buttonSubmit,
  onCheckMark,
  deleteHandle,
}) => {
  return (
    <>
      <h3>All tasks</h3>
      {todos.map((todo) => (
        <li key={todo.id} id={todo.title}>
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
              onClick={(e) => {
                buttonSubmit(todo.id, e);
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
