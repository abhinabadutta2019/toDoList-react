const TaskList = ({ todos, inputEvent, buttonEvent }) => {
  return (
    <>
      {todos.map((oneItem) => {
        return (
          <li key={oneItem.id}>
            {oneItem.title}

            <input
              onChange={(e) => {
                inputEvent(e, oneItem.id);
              }}
            />
            <button onClick={buttonEvent}>submit</button>
          </li>
        );
      })}
    </>
  );
};

export default TaskList;
