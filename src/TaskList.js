const TaskList = ({
  todos,
  inputHandler,
  buttonSubmit,
  onCheckMark,
  deleteHandle,
}) => {
  return (
    <>
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
          {todo.title}--{todo.done.toString()}
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
