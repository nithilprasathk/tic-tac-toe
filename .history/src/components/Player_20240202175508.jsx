import { useState } from "react";
export default function Player({name,symbol}){
    const [isEditing,setEditing] = useState(false);
    
    return(

        <li>
          <span className="players">
          <span className="player-name">{name}</span>
          <span className="player-symbol">{symbol}</span>
          </span>
          <button onClick={}>edit</button>
        </li>

    );
}