import Task from "./AddTask";

const TaskList = ({ todos, onEditTodo }) => {
  return (
    <>
      {todos.map((todo) => {
        return (
          <li key={todo.id}>
            <Task todo={todo} onEditTodo={onEditTodo} />
          </li>
        );
      })}
    </>
  );
};

export default TaskList;
