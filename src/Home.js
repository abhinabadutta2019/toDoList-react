import { useState } from "react";
import TaskList from "./TaskList";

const Home = () => {
  //
  const [squares, setSquares] = useState(Array(9).fill(null));
  //
  function handleClick(i) {
    const nextSquares = squares.slice();
    nextSquares[i] = "X";
    setSquares(nextSquares);
  }
  //
  return (
    <>
      <div>
        <TaskList value={squares[0]} onSquareClick={() => handleClick(0)} />
        <TaskList value={squares[1]} onSquareClick={() => handleClick(1)} />
        <TaskList value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div>
        <TaskList value={squares[3]} onSquareClick={() => handleClick(3)} />
        <TaskList value={squares[4]} onSquareClick={() => handleClick(4)} />
        <TaskList value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div>
        <TaskList value={squares[6]} onSquareClick={() => handleClick(6)} />
        <TaskList value={squares[7]} onSquareClick={() => handleClick(7)} />
        <TaskList value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
};

export default Home;
