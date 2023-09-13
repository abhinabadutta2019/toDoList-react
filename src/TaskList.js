const TaskList = ({ lists }) => {
  //
  //   console.log(lists);
  //
  return (
    <div>
      {lists.map((task) => (
        <div key={task.id}> {task.title}</div>
      ))}
    </div>
  );
};

export default TaskList;
