import { useState } from "react";
export default function Player({ name, symbol }) {
  const [isEditing, setEditing] = useState(false);
  function handleEdit() {
    setEditing((editing)=>!editing);
  }
  let playerName = <span className="player-name">{name}</span>;
  if (isEditing) playerName = <input type="text" required defaultValuevalue={name}></input>;
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
