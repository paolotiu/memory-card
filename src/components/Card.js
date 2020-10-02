import React, {useState, useEffect} from 'react'

import './Card.css'
const Card = (props) => {

    return(
        <div className="card" position={props.index} onClick={() => props.checkIfClicked(props.index)}>
            <div className="card-image">
                <img src={props.character.img} alt="" />
            </div>
            <div className="name">
                <p>{props.character.id}</p>
            </div>
            <div className="desciption">
                <p>index: {props.index}</p>
                <p>{props.character.occupation}</p>
            </div>
            
        </div>
    )
}

export default Card