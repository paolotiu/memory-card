import React from 'react'

import './css/Card.css'
const Card = (props) => {
    

    if(!props.form){
        return(
            <div className="card" position={props.index} onClick={() =>{  
                //Disables scoring when editing
                if(!props.editing){
                    return props.checkIfClicked(props.index)
                }
                return null
                }}>
                {props.editing ? <p onClick={() => props.deleteCard(props.index)} className="delete"> x </p> : ''}
                <div className="card-image">
                    <img src={props.character.img} alt="" />
                </div>
                <div className="name">
                    <p>{props.character.name}</p>
                </div>
                <div className="occupation">
                    <p>{props.character.occupation}</p>
                </div>
                
            </div>
        )
    }else{
        return(
            <div className="card make-new-card" onClick={props.showModal}>
                <p className="material-icons"> add_circle_outline </p>
            </div>
        )
    }
    

}

export default Card