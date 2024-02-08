import { useState } from "react";
export default function Player({name,symbol}){
    const [isEditing,setEditing] = useState(false);
    function handleEdit(){
        if()
        setEditing(true);
    }
    return(

        <li>
          <span className="players">
          <span className="player-name">{name}</span>
          <span className="player-symbol">{symbol}</span>
          </span>
          <button onClick={()=>handleEdit}>edit</button>
        </li>

    );
}