import { useEffect, useState } from 'react'
import './Game.css'
import Customer from './Customer'
import Menu from './Menu'

function Game(props){
    const [customer, setCustomer] = useState(Math.floor(Math.random() * 4))

    const newCustomer = () => {
        setCustomer(Math.floor(Math.random() * 4))
       
    }

    return(
        <div className="Game">
           <div className="Counter"></div>
           <Customer currCustomer={customer}/>
           <button onClick={newCustomer}>Serve</button>
        </div>
        
    )
}

export default Game