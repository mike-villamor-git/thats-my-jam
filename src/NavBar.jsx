import { useEffect, useState } from 'react'
import './App.css'
import Timer from './Timer'

function NavBar(props) {
    if (typeof props.displayTimer === 'number'){
        return (
            <div className="navBar">
            <button onClick={props.menuOpened}>Menu</button>
            <Timer displayTimer={props.displayTimer} setDisplayTimer={props.setDisplayTimer} resetTimer={props.resetTimer} setResetTimer={props.setResetTimer} />
            <p>Points: {props.points}</p>
        </div> 
        )
    }
    return (
        <div className="navBar-complete">Final Score: {props.points}</div>
    )
}

export default NavBar
