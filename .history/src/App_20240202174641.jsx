
function App() {
  

  return (
   <main>
    <div id="game-container">
      <ol id="players">
        <li>
          <span className="players">
          <span className="player-name">Player 1</span>
          <span className="player-symbol">X</span>
          </span>
          <button>edit</button>
        </li>
        <li>
        <span className="players">
          <span className="player-name">Player 2</span>
          <span className="player-symbol">O</span>
          </span>
        </li>
      </ol>

    </div>
   </main>
  )
}

export default App
