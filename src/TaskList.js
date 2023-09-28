const TaskList = ({ todos, inputHandler, buttonSubmit }) => {
  return (
    <>
      {todos.map((todo) => (
        <li key={todo.id}>
          {todo.title}--{todo.done.toString()}
          <p>
            <input
              onChange={(e) => {
                inputHandler(e);
              }}
            />
            <button
              onClick={(e) => {
                buttonSubmit(e, todo.id);
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
