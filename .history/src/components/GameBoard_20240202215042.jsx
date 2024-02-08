    updateBoard[rowIndex][colIndex] = activePlayerSymbol;
      return updateBoard;
    });
    onSelectSquare();
  }import { useState } from "react";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];
export default function GameBoard({onSelectSquare,activePlayerSymbol}) {
  const [gameBoard, setGameBoard] = useState(initialGameBoard);
  function handleSelect(rowIndex, colIndex) {
    setGameBoard((preGameBoard) => {
      const updateBoard = [...preGameBoard].map((innerArray) => [
        ...innerArray,
      ]);

  
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
