import Cell from "./Cell"

function Board({cells,handleClick,currentPlayer,winningCombination}){
    return(
        
        <div className="board mt-5  text-white mb-3">
            {
                cells.map((value,index)=>(
                    <Cell 
                        key={index}
                        value={value}
                        onClick={()=>handleClick(index)} 
                        currentPlayer={currentPlayer}
                        isWinningCell={winningCombination.includes(index)} />
                ))
            }
        </div>
    )
}
export default Board