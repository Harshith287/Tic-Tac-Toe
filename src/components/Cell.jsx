function Cell({value,onClick,currentPlayer,isWinningCell}){
    let className=null;
    if(value===null && currentPlayer!==null){
        className=`${currentPlayer}-hover`
    }
    if(isWinningCell)
        className+=' text-green';
       
    return(
        <div className={`cell ${className} `}  onClick={onClick}>
            <p>{value}</p>
        </div>
    )
}
export default Cell;