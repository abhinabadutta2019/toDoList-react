import { useState } from "react";
import TaskList from "./TaskList";

const Home = () => {
  //
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));

  // console.log(squares, "squares");
  //
  function handleClick(i) {
    //
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    //
    const nextSquares = squares.slice();
    //
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    //
    setXIsNext(!xIsNext);
    setSquares(nextSquares);
  }
  //
  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  }
  //
  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  //
  //
  return (
    <>
      <div className="status">{status}</div>
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
