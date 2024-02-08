const initialGameBoard = [
    [null,null,null],
    [null,null,null],
    [null,null,null],
];
export default function GameBoard(){
    return(
        <ol id="game-board">
            {initialGameBoard.map((row,rowIndex)=> (<li key={rowIndex}>{row}</li>
            <ol>
                {row.map((playerSymbol,colIndex)=> (<li>{playerSymbol}</li>
                 )
            
}
})
            </ol>
            
        }
        </ol>
    );
}