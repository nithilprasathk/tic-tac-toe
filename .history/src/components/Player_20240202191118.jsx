import { useState } from "react";
export default function Player({ intialName, symbol }) {
  const [playerName,setName] = useState(intialName);
  const [isEditing, setEditing] = useState(false);
  function handleEdit() {
    setEditing((editing)=>!editing);
  }
  let editablePlayerName = <span className="player-name">{name}</span>;
  if (isEditing) editablePlayerName = <input type="text" required value={name}></input>;
  return (
    <li>
      <span className="players">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEdit}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
