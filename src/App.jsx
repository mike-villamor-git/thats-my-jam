import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Game from './Game'
import NavBar from './NavBar'
import Menu from './Menu'

function App(){
    const [gameStarted, setGameStarted] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)
    const [points, setPoints] = useState(0);
    const [resetTimer, setResetTimer] = useState(true)
    const [displayTimer, setDisplayTimer] = useState(30)
   
    const addPoints = () => {
        setPoints(points => points + 100)
    }
    
    const restartResetTimer = () => {
        console.log('inside restartResetTimer function in app.js')
        console.log('before reset: ', resetTimer)
        setResetTimer(resetTimer => !resetTimer)
        console.log('after reset: ', resetTimer)
    }

    const startGame = () => {
        setGameStarted(gameStarted => !gameStarted)
        setDisplayTimer(30)
        setPoints(0)
    }
    const openMenu = () => setMenuOpen(menuOpen => !menuOpen)
    return(
    <div className="App">
        <div className={gameStarted ? "map gameStart" : "map"}>
            {gameStarted ? <NavBar  points={points} menuOpened={openMenu} resetTimer={resetTimer} setResetTimer={restartResetTimer} displayTimer={displayTimer} setDisplayTimer={setDisplayTimer}/> : null}
            {gameStarted ? <Game points={points} addPoints={addPoints} resetPoints={setPoints} timer={displayTimer} resetTimer={setDisplayTimer}/> : <button onClick={startGame}>Click To Play!</button>}
        </div>
        { menuOpen ? <div className="Menu">
            <Menu quitGame={startGame} closeMenu={openMenu} setResetTimer={restartResetTimer} points={points} setPoints={setPoints}/>
        </div> : null}
     </div>
    ) 
}

export default App