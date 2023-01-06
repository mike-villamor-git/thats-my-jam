import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function PixelGame() {
  const [playerPosition, setPlayerPosition] = useState(250)
  const [playerTop, setPlayerTop] = useState(300);
  const [playerLeft, setPlayerLeft] = useState(350);

  const playerStyle = {
    top: `${playerTop}px`,
    left: `${playerLeft}px`
  }
  

  useEffect(() => {
    document.addEventListener('keydown', detectKeyDown, true)
  }, [])

  const detectKeyDown = (e) => {
    console.log(`clicked ${e.key}`)
    if (e.key === 'w'){
      setPlayerTop(playerTop => playerTop - 25)
    }
    if (e.key === 's'){
      setPlayerTop(playerTop => playerTop + 25)
    }
    if (e.key === 'a'){
      setPlayerLeft(playerLeft => playerLeft - 25)
    }
    if (e.key === 'd'){
      setPlayerLeft(playerLeft => playerLeft + 25)
    }
  }
  

 
  return (
    <div className="App">
      <div className = "camera">
        <div className="map" >
          <div className="Player" style={playerStyle} position={playerPosition}>
          </div>
        </div>
      </div>
      hello
    </div>
  )
}

export default PixelGame
