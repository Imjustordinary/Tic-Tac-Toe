import './Display.css'
import Won from './Won'


const Element =(props)=>{
    let className = ''
    let dot = null

    if(props.id === 1){
        className='eachTic top left'
    }
    if(props.id ===2){
        className='eachTic top'
    }
    if(props.id=== 3){
        className='eachTic top right'
    }
    if(props.id === 4){
        className='eachTic left'
    }
    if(props.id===5){
        className='eachTic'
        dot = <Won disable={props.disable} nameClass={props.nameClass}/>
    }
    if(props.id=== 6){
        className='eachTic right'
    }
    if(props.id === 7){
        className='eachTic bottom left'
    }
    if(props.id===8){
        className='eachTic bottom'
    }
    if(props.id=== 9){
        className='eachTic bottom right'
    }
    return(
       
        <div className={className} onClick={props.action==='disable'?null:()=>props.chooseHandler(props.id)}>
            <img className='element' src={props.element} style={ props.element === null ? {display:'none'} :null} />
            {dot}
        </div>
          )
}

export default Element