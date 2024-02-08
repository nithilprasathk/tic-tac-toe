import { useState } from "react";
import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";
function deriveActivePlayer(gameTurns){
  let currentPlayer = "X";
      if (prevTurns.length > 0 && prevTurns[0].player === "X") {
        currentPlayer = "O";
      }
    return 
}
function App() {
  const [gameTurns, setGameTurns] = useState([]);
  // const [activePlayer, setActivePlayer] = useState("X");
  const activePlayer = deriveActivePlayer(gameTurns);
  function handleSelectSquare(rowIndex, colIndex) {
    cont currentPlayer  = deriveActivePlayer(pr)
    // setActivePlayer((currentPlayer) => (currentPlayer === "X" ? "O" : "X"));
    setGameTurns((prevTurns) => {
      
      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurns,
      ];
      return updatedTurns;
    });
  }
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            intialName="Player 1"
            symbol="X"
            isActive={activePlayer === "X"}
          />
          <Player
            intialName="Player 2"
            symbol="O"
            isActive={activePlayer === "O"}
          />
        </ol>
        <GameBoard onSelectSquare={handleSelectSquare} turns={gameTurns} />
      </div>
      <Log turns={gameTurns}/>
    </main>
  );
}

export default App;
