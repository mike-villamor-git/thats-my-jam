import { useEffect, useState } from 'react'
import './App.css'

function Menu(props) {
    const handleQuitClick = () => {
        props.quitGame();
        props.closeMenu();
    }

    const handleReset = () => {
        props.setResetTimer(false)
        props.closeMenu();
    }
    return (
        <>
        <div className="menuNavBar">
         <button onClick={props.closeMenu}>X</button>
        </div>
        <h1>Menu</h1>
        <div className='menuOptions'>

            <button>How To Play</button>
            <button onClick={handleReset}>Restart</button>
            <button onClick={handleQuitClick}>Quit</button>
        </div>
       </>
    )
}

export default Menu;