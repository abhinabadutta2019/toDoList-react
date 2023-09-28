const TaskList = ({ todos, inputHandler, buttonSubmit, onCheckMark }) => {
  return (
    <>
      {todos.map((todo) => (
        <li key={todo.id}>
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
        </li>
      ))}
    </>
  );
};

export { TaskList };
