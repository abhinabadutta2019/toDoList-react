const TaskList = ({ todos }) => {
  return (
    <>
      {todos.map((oneItem) => {
        return (
          <li key={oneItem.id}>
            {oneItem.title}

            <input />
            <button>submit</button>
          </li>
        );
      })}
    </>
  );
};

export default TaskList;
