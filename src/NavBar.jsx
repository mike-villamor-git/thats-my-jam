import { useEffect, useState } from 'react'
import './App.css'

function NavBar(props) {
    return (
        <div className="navBar">
                <button onClick={props.menuOpened}>Menu</button>
                <p>Points: </p>
        </div>
    )
}

export default NavBar
