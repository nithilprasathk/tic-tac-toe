import { useState } from "react";
export default function Player({name,symbol}){
    const [isEditing,setEditing] = useState(false);
    function handleEdit(){
        setEditing(true);
    }
    let playerName = 
    return(

        <li>
          <span className="players">
         {!isEditing && <span className="player-name">{name}</span>}
         {isEditing && <input type="text" required></input>}
          <span className="player-symbol">{symbol}</span>
          </span>
          <button onClick={handleEdit}>edit</button>
        </li>

    );
}