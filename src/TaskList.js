import { useState } from "react";

const TaskList = ({ value, onSquareClick }) => {
  //
  // const [value, setValue] = useState(null);
  // //
  // const handleClick = () => {
  //   setValue("X");
  // };
  //
  return (
    <>
      <button onClick={onSquareClick}>{value}</button>
    </>
  );
};

export default TaskList;
