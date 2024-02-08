import Player from "./components/Player"
function App() {
  

  return (
   <main>
    <div id="game-container">
      <ol id="players">
        <Player name="Player 1" symbol/>
        <li>
        <span className="players">
          <span className="player-name">Player 2</span>
          <span className="player-symbol">O</span>
          </span>
          <button>edit</button>
        </li>
      </ol>

    </div>
   </main>
  )
}

export default App
