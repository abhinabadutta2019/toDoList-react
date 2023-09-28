const AddTask = ({ inputNewTask, addNewTask }) => {
  return (
    <>
      <h3>Add tasks</h3>
      <input onChange={inputNewTask} />
      <button onClick={addNewTask}>Add new task</button>

      <br />
      <br />
      <hr />
    </>
  );
};

export { AddTask };
