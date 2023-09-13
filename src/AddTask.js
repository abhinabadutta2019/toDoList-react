const AddTask = ({ addTask }) => {
  //

  //
  return (
    <div>
      <form>
        <label>
          Enter your task:
          <input type="text" id="taskName" />
        </label>
      </form>
      <button
        onClick={() => {
          addTask();
        }}
      >
        Add task
      </button>
    </div>
  );
};

export default AddTask;
