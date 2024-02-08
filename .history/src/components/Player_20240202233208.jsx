import { useState } from "react";
export default function Player({ intialName, symbol,isActive,onchangeName }) {
  const [playerName,setName] = useState(intialName);
  const [isEditing, setEditing] = useState(false);
  function handleEdit() {
    setEditing((editing)=>!editing);
    
  }
  function handleChange(event){
    setName(event.target.value);
  }
  let editablePlayerName = <span className="player-name">{playerName}</span>;
  if (isEditing) editablePlayerName = <input type="text" required value={playerName} onChange={handleChange}></input>;
  return (
    <li className={isActive ? "active" : undefined}>
      <span className="players">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEdit}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
