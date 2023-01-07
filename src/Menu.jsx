import { useEffect, useState } from 'react'
import './App.css'
import HowToPlay from './HowToPlay'

function Menu(props) {
    const [menu, setMenu] = useState('menuOptions')
    const handleQuitClick = () => {
        props.quitGame();
        props.closeMenu();
    }

    const handleReset = () => {
        props.setResetTimer()
        props.closeMenu();
    }
    return (
        <>
        <div className="menuNavBar">
         <button onClick={props.closeMenu}>X</button>
        </div>
       
        {menu === "menuOptions" &&    
         <div className="menuOptions">
             <h1>Menu</h1>
            <button onClick={()=>{setMenu("howToPlay")}}>How To Play</button>
            <button onClick={handleReset}>Restart</button>
            <button onClick={handleQuitClick}>Quit</button>
        </div>}
        {menu === "howToPlay" && <HowToPlay/>}
       </>
    )
}

export default Menu;