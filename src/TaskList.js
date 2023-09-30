import Task from "./Task";

const TaskList = ({ todos, deleteFunc, onEditTodo }) => {
  return (
    <>
      {todos.map((todo) => {
        return (
          <li key={todo.id}>
            <Task todo={todo} deleteFunc={deleteFunc} onEditTodo={onEditTodo} />
          </li>
        );
      })}
    </>
  );
};

export default TaskList;
