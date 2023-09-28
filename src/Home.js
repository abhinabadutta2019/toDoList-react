import { useState } from "react";
import { TaskList } from "./TaskList";

let nextId = 3;
const initialTodos = [
  { id: 0, title: "Buy milk", done: true },
  { id: 1, title: "Eat tacos", done: false },
  { id: 2, title: "Brew tea", done: false },
];

const Home = () => {
  const [todos, setTodos] = useState(initialTodos);

  const [inputValue, setinputValue] = useState("");

  //
  const inputHandler = (e) => {
    // console.log(e.target.value);
    //this to get input field value
    setinputValue(e.target.value);

    // console.log(todos, "todos");
  };
  //

  const buttonSubmit = (e, todoId) => {
    // console.log("Hi");
    //
    //
    const mapValue = todos.map((oneItem) => {
      // console.log(oneItem);
      if (oneItem.id == todoId) {
        // console.log(oneItem.id, "oneItem.id");
        // console.log(todoId, "todoId");
        return { ...oneItem, title: inputValue };
      } else {
        return oneItem;
      }
    });

    setTodos(mapValue);
  };

  return (
    <>
      <TaskList
        todos={todos}
        inputHandler={inputHandler}
        buttonSubmit={buttonSubmit}
      />
    </>
  );
};

//

//

export default Home;
