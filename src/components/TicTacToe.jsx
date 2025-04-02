import { useState,useEffect } from "react"
import Board from "./Board"

const Player_X = 'X';
const Player_O = 'O';

const Winning_Combinations = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],    
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]]

const gameState={
    playerXWins:0,
    playerOWins:1,
    draw:2,
    inProgress:3
}

function checkWinner(cells,setgameStatus,setWinningCombination){
    for(let i=0;i<Winning_Combinations.length;i++)
    {
        const [a,b,c] = Winning_Combinations[i];
        // console.log('checking combination for',a,b,c)
        if(cells[a] && cells[a]===cells[b] && cells[a]===cells[c]){
            // console.log('winning combination',a,b,c);
            setWinningCombination([a,b,c]); 
            if(cells[a]===Player_X)
                setgameStatus(gameState.playerXWins);
            if(cells[a]===Player_O)
                setgameStatus(gameState.playerOWins);
            return;
        }
    }
    const isEveryCellFilled=cells.every(cell=>cell!==null);
    if(isEveryCellFilled)
        setgameStatus(gameState.draw);
}

function TicTacToe (){
    const [cells,setCells] = useState(Array(9).fill(null));
    const [currentPlayer,setCurrentPlayer] = useState(Player_X);
    const [gameStatus,setgameStatus] = useState(gameState.inProgress);
    const [winningCombination,setWinningCombination] = useState([]);
    

    useEffect(()=>{
        checkWinner(cells,setgameStatus,setWinningCombination);
    },[cells])

    const handleClick=(index)=>{
        if(cells[index]!==null || gameStatus !== gameState.inProgress)
            return;
        const newCells = [...cells];
        newCells[index]=currentPlayer;
        setCells(newCells);
        setCurrentPlayer(currentPlayer === Player_X ? Player_O : Player_X);
    }

    const onReset=()=>{
        setCells(Array(9).fill(null));
        setCurrentPlayer(Player_X);
        setgameStatus(gameState.inProgress);
        setWinningCombination([]);
    }
    
    return(
        <div  className="mt-5">
            <h1>Tic Tac Toe</h1>
            <Board  currentPlayer={currentPlayer} cells={cells} handleClick={handleClick} winningCombination={winningCombination}/>
            {gameStatus===gameState.playerXWins && <h1 className="text-success">Player X Wins</h1>}
            {gameStatus===gameState.playerOWins && <h1 className="text-danger">Player O Wins</h1>}
            {gameStatus===gameState.draw && <h1>Draw</h1>}
            <button className="btn btn-primary mt-3 fs-4 " onClick={onReset}>Reset</button>
        </div>
    )
}
export default TicTacToe