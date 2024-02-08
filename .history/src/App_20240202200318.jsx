import { useState } from "react";
import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
function App() {
  const [activePlayer,setActivePlayer] = useState('X');
  function selectActivePlayer(){
    setActivePlayer((currentPlayer)=> currentPlayer==='X' ? 'O':'X');
  }
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight">
          <Player intialName="Player 1" symbol="X" />
          <Player intialName="Player 2" symbol="O" />
          
        </ol>
        <GameBoard onSelectSquare={selectActivePlayer}/>
      </div>
    </main>
  );
}

export default App;
