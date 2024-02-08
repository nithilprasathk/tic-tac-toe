import { useState } from "react";
export default function Player({ name, symbol }) {
  const [isEditing, setEditing] = useState(false);
  function handleEdit() {
    setEditing(true);
  }
  let playerName = <span className="player-name">{name}</span>;
  if (isEditing) playerName = <input type="text" required></input>;
  return (
    <li>
      <span className="players">
        {playerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEdit}>{isEditing ? "Save"}</button>
    </li>
  );
}
