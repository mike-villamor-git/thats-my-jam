import { useEffect, useState } from 'react'
import './Game.css'
import Customer from './Customer'
import Menu from './Menu'

function Game(props){
    const [customer, setCustomer] = useState(Math.floor(Math.random() * 4))
    const [flavor, setFlavor] = useState([Math.floor(Math.random() * 3), Math.floor(Math.random() * 4), Math.floor(Math.random() * 4), Math.floor(Math.random() * 4)])
    const newCustomer = () => { 
        setCustomer(Math.floor(Math.random() * 4))
       
    }

    const newFlavors = () => {
        setFlavor([Math.floor(Math.random() * 3), Math.floor(Math.random() * 4), Math.floor(Math.random() * 4), Math.floor(Math.random() * 4)])
    }

    function handleServeClick(){
        newCustomer();
        newFlavors();
    }

    return(
        <div className="Game">
           <div className="Counter"></div>
           <Customer currCustomer={customer} first={flavor[0]} second={flavor[1]} third={flavor[2]} fourth={flavor[3]}/>
           <button onClick={handleServeClick}>Serve</button>
        </div>
        
    )
}

export default Game