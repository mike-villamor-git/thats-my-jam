import { useEffect, useState } from 'react'
import './Game.css'
import Customer from './Customer'
import Menu from './Menu'
import banana from './assets/jams/bananaJam.png'
import blueberry from './assets/jams/blueberryJam.png'
import grape from './assets/jams/grapeJam.png'
import strawberry from './assets/jams/strawberryJam.png'
import GameOver from './GameOver'

function Game(props){
    const [customer, setCustomer] = useState(Math.floor(Math.random() * 4))
    const [flavor, setFlavor] = useState([Math.floor(Math.random() * 3), Math.floor(Math.random() * 4), Math.floor(Math.random() * 4), Math.floor(Math.random() * 4)])
    const [chooseJam, setChooseJam] = useState([])
    const [maxJams, setMaxJams] = useState(false)
    const [customerMood, setCustomerMood] = useState(0)

    function handleCustomerMood(mood){
        setCustomerMood(mood)
        setTimeout(() => {
            setCustomerMood(0)
            newCustomer();
            newFlavors();
            setMaxJams(false);
            setChooseJam([]);
        }, 500)
    }
    

    
    const newCustomer = () => { 
        setCustomer(Math.floor(Math.random() * 4))
       
    }

    const newFlavors = () => {
        setFlavor([Math.floor(Math.random() * 3), Math.floor(Math.random() * 4), Math.floor(Math.random() * 4), Math.floor(Math.random() * 4)])
    }

    function handleServeClick(){
        calculatePoints();
    }

    function handleJamClick(e){
        console.log(e.target.id)
        if (chooseJam.length === 4){
            console.log('max jams exceeded!')
            setMaxJams(true)
            return;
        }
        const currJams = chooseJam.slice();
        setChooseJam([...currJams, e.target.id])
    }

    function calculatePoints(){
        const flavors = ['banana', 'blueberry', 'grape', 'strawberry']

        let numBananas = 0;
        let numGrapes = 0;
        let numBlue = 0;
        let numStraw = 0;
        
        let actualNumBananas = 0;
        let actualNumGrapes = 0;
        let actualNumBlue = 0;
        let actualNumStraw = 0;

       for(let fruit of flavor){
        if (flavors[fruit] === 'banana'){
            numBananas += 1;
        }
        else if (flavors[fruit] === 'blueberry'){
            numBlue += 1;
        }
        else if (flavors[fruit] === 'grape'){
            numGrapes += 1;
        }
        else if (flavors[fruit] === 'strawberry'){
            numStraw += 1;
        }
       }
       
       for(let jam of chooseJam){
        if (jam === 'banana'){
            actualNumBananas += 1;
        }
        else if (jam === 'blueberry'){
            actualNumBlue += 1;
        }
        else if (jam === 'grape'){
            actualNumGrapes += 1;
        }
        else if (jam === 'strawberry'){
            actualNumStraw += 1;
        }
       }

       if(numBananas !== actualNumBananas || numBlue !== actualNumBlue || numGrapes !== actualNumGrapes || numStraw !== actualNumStraw){
        console.log('wrong order! no points!')
        handleCustomerMood(1)
        
       }
       else {
        props.addPoints()
        handleCustomerMood(2)
       }
       return
    }

    function handleRestartClick() {
        props.resetPoints(0);
        props.resetTimer(30);
        setCustomerMood(0)
        newCustomer();
        newFlavors();
        setMaxJams(false);
        setChooseJam([]);
    }

    return(
        <div className="Game">
            <div className="Counter">
            {typeof props.timer === 'number' ?
                <div className="Jams">
                    <button className="jam" onClick={handleJamClick} disabled={maxJams}><img id="banana" src={banana} width="85px" /></button>
                    <button className="jam" onClick={handleJamClick} disabled={maxJams}><img id="blueberry" src={blueberry} width="85px" /></button>
                    <button className="jam" onClick={handleJamClick} disabled={maxJams}><img id="grape" src={grape} width="85px" /></button>
                    <button className="jam" onClick={handleJamClick} disabled={maxJams}><img id="strawberry" src={strawberry} width="85px" /></button>
                </div> : null }
           </div>
           {typeof props.timer === 'number' ?
           
           <Customer currCustomer={customer} first={flavor[0]} second={flavor[1]} third={flavor[2]} fourth={flavor[3]} mood={customerMood} timer={props.timer}/>
           : <GameOver/>}
           {typeof props.timer === 'number' ? <button onClick={handleServeClick} className="serveButton">Serve</button> : 
           <>
           <button onClick={handleRestartClick} className="serveButton">Restart?</button> 
           </>
            }
        </div>
    )
}

export default Game