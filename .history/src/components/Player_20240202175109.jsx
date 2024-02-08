export default function Player({name,symbol}){
    return(

        <li>
          <span className="players">
          <span className="player-name">{name}</span>
          <span className="player-symbol">{}</span>
          </span>
          <button>edit</button>
        </li>

    );
}