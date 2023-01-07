import { useEffect, useState } from 'react'
import './Game.css'

function Timer({resetTimer, displayTimer, setDisplayTimer, setResetTimer}) {
    

    useEffect(()=>{
        let interval = displayTimer;
        if (displayTimer === 0){
            setDisplayTimer("TIME'S UP!!!")
            
        }
        if (!resetTimer){
            setDisplayTimer(30)
            console.log('hit this')
            setResetTimer()
            
            
        }
        else if (typeof(displayTimer) === 'number'){
        interval = setInterval(() => {
        setDisplayTimer(displayTimer => displayTimer - 1)
       }, 1000);
        }

       return () => clearInterval(interval);
    }, [displayTimer])

    

    return (
        <div className="Timer">
            {displayTimer}
        </div>
    )
}

export default Timer;