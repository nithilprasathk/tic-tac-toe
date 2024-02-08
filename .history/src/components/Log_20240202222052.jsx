export default function Log({turns}){
    return <ol id="log">
        {turns.map(turn=> <li>{turn.player} selected {turn.sqaure.row}{turn.sqaure.col}</li>)}
    </ol>
}