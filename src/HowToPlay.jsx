import './HowToPlay.css'
// import toasty from '../dist/assets/jamGame/howToPlay.png'

function HowToPlay(props){
    return(
        <div className="HTP">
             <h2>How To Play</h2>
             <p1> Serve customers the jams they want by clicking on the correct jars. Serve as many customers as you can until the timer runs out.</p1>
             <img class="imageBot" src="/src/assets/jamGame/howToPlay.PNG" width="350px"/>
        </div>
        
    )
}

export default HowToPlay