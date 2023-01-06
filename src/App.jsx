import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Game from './Game'
import NavBar from './NavBar'
import Menu from './Menu'

function App(){
    const [gameStarted, setGameStarted] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)
   
    

    const startGame = () => {
        setGameStarted(gameStarted => !gameStarted)
    }
    const openMenu = () => setMenuOpen(menuOpen => !menuOpen)
    return(
    <div className="App">
        <div className={gameStarted ? "map gameStart" : "map"}>
            {gameStarted ? <NavBar menuOpened={openMenu}/> : null}
            {gameStarted ? <Game /> : <button onClick={startGame}>Click To Play!</button>}
        </div>
        { menuOpen ? <div className="Menu">
            <Menu quitGame={startGame} closeMenu={openMenu}/>
        </div> : null}
     </div>
    ) 
}

export default App