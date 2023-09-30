import Task from "./Task";

const TaskList = ({ todos, deleteFunc }) => {
  return (
    <>
      {todos.map((todo) => {
        return (
          <li key={todo.id}>
            <Task todo={todo} deleteFunc={deleteFunc} />
          </li>
        );
      })}
    </>
  );
};

export default TaskList;
