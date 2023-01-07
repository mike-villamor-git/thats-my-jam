import { useEffect, useState } from 'react'
import './Game.css'

function Timer(props) {
    const [displayTimer, setDisplayTimer] = useState(30)

    useEffect(()=>{
        console.log(props.resetTimer)
        let interval = displayTimer;
        if (displayTimer === 0){
            setDisplayTimer("TIME'S UP!!!")
            
        }
        if (!props.resetTimer){
            setDisplayTimer(30)
            console.log('hit this')
            props.setResetTimer()
            console.log(props.resetTimer)
            
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