export default function GameOver({ winner,onResatart }) {
    return(
  <div id="game-over">
    <h2>Game Over!</h2>
    {winner && <p>{winner} won!</p>}
    {!winner && <p> Match Draw!</p>}
    <p>
      <button onClick={}>Rematch!</button>
    </p>
  </div>
    );
}
