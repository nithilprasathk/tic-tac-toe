import { useState } from "react";
export default function Player({ name, symbol }) {
  const [isEditing, setEditing] = useState(false);
  function handleEdit() {
    setEditing(!isEditing);
  }
  let playerName = <span className="player-name">{name}</span>;
  if (isEditing) playerName = <input type="text" required value={name}></input>;
  return (
    <li>
      <span className="players">
        {playerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEdit}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
