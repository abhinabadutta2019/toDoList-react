const TaskList = ({ lists, handleDelete }) => {
  //
  //   console.log(lists);
  //
  return (
    <div>
      {lists.map((task) => (
        <div key={task.id}>
          {task.title}
          <button
            onClick={() => {
              handleDelete(task.id);
            }}
          >
            Delete Task
          </button>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
