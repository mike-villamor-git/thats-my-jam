import { useEffect, useState } from 'react'
import './Game.css'
import Customer from './Customer'
import Menu from './Menu'

function Game(props){
    const [customer, setCustomer] = useState(Math.floor(Math.random() * 5))

    const newCustomer = () => setCustomer(Math.floor(Math.random() * 5))

    return(
        <div className="Game">
           <Customer currCustomer={customer}/>
           <button onClick={newCustomer}>Serve</button>
        </div>
        
    )
}

export default Game