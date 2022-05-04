import React from 'react'
import './MessageBox.css'

const MessageBox =(props)=>{
    let message
    
    if(props.draw){
        message= <React.Fragment>
        <div className='drop-box ani'>
         
           <p className='drop-box-text-draw'>Draw!</p>
           <button className='drop-box-button' onClick={()=>props.clearHandler()}>New Game</button>
       </div>
       <div className='background'></div>
   </React.Fragment>
    }
    else{
        message = <React.Fragment>
        <div className='drop-box ani'>
           <img src={!props.turn?'pic/cross.png':'pic/circle.png'} className='drop-box-img' />
           <p className='drop-box-text'>Wins!</p>
           <button className='drop-box-button' onClick={()=>props.clearHandler()}>New Game</button>
       </div>
       <div className='background'></div>
   </React.Fragment>}

    return(
        <div className='drop-box-container' style={ props.dropMessage === false ? {display:'none'} :null}>
            {message}
          
          
        </div>
    )
}

export default MessageBox