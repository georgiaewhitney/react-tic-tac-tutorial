import { useState } from "react";

export default function Board() {
  // set X first by default
  const [xIsNext, setXIsNext] = useState(true);
  // Array(9).fill(null) creates an array with 9 elements and sets each to null
  // the useState around it declares a squares state variable initially set to that array
  // each array entry corresponds to square value
  // later on will look like ['O', 'X', 'null', 'X' etc]
  const [squares, setSquares] = useState(Array(9).fill(null));

  // creates copy of squares array (nextSquares) with slice() method
  // slice is changing data without mutating - data can be reused later
  // handleClick updates nextSquares with X to square index [i]
  // calling setSquares lets React know state of component has changes. Triggers a re-render of components that uses squares state (Board) as well as child components (Square)
  function handleClick(i) {
    // early return allows us to check if state has already been adjusted
    if (squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
    console.log(`Square ${i} clicked`);
  }

  // {squares[x] declares value prop down to square component}
  //
  return (
    <>
      <div className="boardRow">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="boardRow">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="boardRow">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
}

// {value} prop from board component
function Square({ value, onSquareClick }) {
  // value stores, and set_x is the function that changes the value
  // null used as initial value
  // const [value, setValue] = useState(null);

  // function handleClick() {
  //   setValue("X");
  //   console.log("X added");
  // }

  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}

/*
when a user clicks the top left square on your board to add an X to it:

Clicking on the upper left square runs the function that the button received as its onClick prop from the Square. The Square component received that function as its onSquareClick prop from the Board. The Board component defined that function directly in the JSX. It calls handleClick with an argument of 0.

handleClick uses the argument (0) to update the first element of the squares array from null to X.

The squares state of the Board component was updated, so the Board and all of its children re-render. This causes the value prop of the Square component with index 0 to change from null to X.

In the end the user sees that the upper left square has changed from empty to having a X after clicking it.
*/
