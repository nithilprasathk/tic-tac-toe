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
        <ol id="players" className="highlight-player">
          <Player intialName="Player 1" symbol="X" isActive={activePlayer==='X'}/>
          <Player intialName="Player 2" symbol="O" isActive={activePlayer==='O'}/>
          
        </ol>
        <GameBoard onSelectSquare={selectActivePlayer} activePlayerSymbol={activePlaye}/>
      </div>
    </main>
  );
}

export default App;
