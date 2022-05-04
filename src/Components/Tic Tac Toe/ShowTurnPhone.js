import './ShowTurn.css'

const ShowTurnPhone =(props)=>{
return(
    <div className='turn-phone'>
        <img className='turn-img' src={props.turn === true?'pic/circle.png':'pic/cross.png'} />
        <p className="text">turn</p>
    </div>
)
}

export default ShowTurnPhone