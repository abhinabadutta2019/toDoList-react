const Task = ({ todo, deleteFunc }) => {
  return (
    <>
      {todo.title}
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
