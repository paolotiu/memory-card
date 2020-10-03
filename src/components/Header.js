import React from 'react'

const Header = (props) => {
    return(
        <div>
            <p>{props.score}</p>
            <p>{props.bestScore}</p>
        </div>
    )
}

export default Header