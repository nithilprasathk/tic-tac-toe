import { useState } from "react";
export default function Player({name,symbol}){
    const 
    return(

        <li>
          <span className="players">
          <span className="player-name">{name}</span>
          <span className="player-symbol">{symbol}</span>
          </span>
          <button>edit</button>
        </li>

    );
}