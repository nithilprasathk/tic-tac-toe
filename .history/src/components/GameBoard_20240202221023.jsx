
const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];
export default function GameBoard({onSelectSquare,turns}) {
//   const [gameBoard, setGameBoard] = useState(initialGameBoard);
//   function handleSelect(rowIndex, colIndex) {
//     setGameBoard((preGameBoard) => {
//       const updateBoard = [...preGameBoard].map((innerArray) => [
//         ...innerArray,
//       ]);
//       updateBoard[rowIndex][colIndex] = activePlayerSymbol;
//       return updateBoard;
//     });
//     onSelectSquare();
//   }
let gameBoard = initialGameBoard;
for(const turn of turns){
    const {square,}
}

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={onSelectSquare}>
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
