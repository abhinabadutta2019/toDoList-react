import Task from "./AddTask";

const TaskList = ({ todos }) => {
  return (
    <>
      {todos.map((todo) => {
        return (
          <li key={todo.id}>
            <Task todo={todo} />
          </li>
        );
      })}
    </>
  );
};

export default TaskList;
