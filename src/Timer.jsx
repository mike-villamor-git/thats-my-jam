import { useEffect, useState } from 'react'
import './Game.css'

function Timer(props) {
    const [displayTimer, setDisplayTimer] = useState(30)

    useEffect(()=>{
        let interval = displayTimer;
        if (displayTimer === 0){
            setDisplayTimer("TIME'S UP!!!")
            
        }
        if (!props.resetTimer){
            setDisplayTimer(30)
            props.setResetTimer(!props.resetTimer)
            
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