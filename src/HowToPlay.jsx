import './HowToPlay.css'
import toasty from './assets/jamGame/howToPlay.png'

function HowToPlay(props){
    return(
        <div className="HTP">
             <h2>How To Play</h2>
             <p1> Each customer will order jams and you're tasked with providing the correct one. Serve as much customers until the timer runs out.</p1>
             <img class="imageBot" src={toasty} width="350px"/>
        </div>
        
    )
}

export default HowToPlay