import { useEffect, useState } from 'react'
import './App.css'
import Timer from './Timer'

function NavBar(props) {
    console.log(props.points)
    return (
        <div className="navBar">
                <button onClick={props.menuOpened}>Menu</button>
                <Timer resetTimer={props.resetTimer} setResetTimer={props.setResetTimer} />
                <p>Points: {props.points}</p>
        </div>
    )
}

export default NavBar
