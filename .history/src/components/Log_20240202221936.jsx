import { Linter } from "eslint";

export default function Log({turns}){
    return <ol id="log">
        {turns.map(turn=> Linter)}
    </ol>
}