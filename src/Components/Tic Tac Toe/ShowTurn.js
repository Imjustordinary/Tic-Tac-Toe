import React from 'react'
import './ShowTurn.css'

const ShowTurn =(props)=>{
    return(
        <React.Fragment>
        <div className='container' style={ props.turn === false ? {display:'none'} :null}>
            <img className='turn-img' src='pic/circle.png' />
            <p className='text'>turn</p>
        </div>
        <div className='container-cross' style={ props.turn === true ? {display:'none'} :null}>
            <img className='turn-img' src='pic/cross.png' />
            <p className='text'>turn</p>
        </div>
        </React.Fragment>
        
    )
}

export default React.memo(ShowTurn)