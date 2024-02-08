import { useState } from "react";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];
export default function GameBoard({on}) {
  const [gameBoard, setGameBoard] = useState(initialGameBoard);
  function handleSelect(rowIndex, colIndex) {
    setGameBoard((preGameBoard) => {
      const updateBoard = [...preGameBoard].map((innerArray) => [
        ...innerArray,
      ]);

      updateBoard[rowIndex][colIndex] = "X";
      return updateBoard;
    });
  }
  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => handleSelect(rowIndex, colIndex)}>
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
