import React from 'react'
import './css/Header.css'

const Header = (props) => {
    return(
        <div className="header">
            <p className="score">Score: {props.score}</p>
            <p className="best-score" >Best Score: {props.bestScore}</p>
            {props.editing ? 
            <p className="edit" onClick={() => props.setEditing(false)}> Done </p>
            :<p className="edit" onClick={() => props.setEditing(true)}> Edit </p>
            }
        </div>
    )
}

export default Header