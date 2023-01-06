import { useEffect, useState } from 'react'
import './App.css'
import './Customer.css'

function Customer({currCustomer}) {

    const customers = ["deer", "bear", "elephant", "fly"]
    
    return (
        <>
        <div className={"customer " + customers[currCustomer]}>
        </div>
       </>
    )
}

export default Customer;