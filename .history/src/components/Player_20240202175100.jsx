export default function Player({name,symbol}){
    return(

        <li>
          <span className="players">
          <span className="player-name">{}</span>
          <span className="player-symbol">X</span>
          </span>
          <button>edit</button>
        </li>

    );
}