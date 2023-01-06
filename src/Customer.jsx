import { useEffect, useState } from 'react'
import './App.css'
import './Customer.css'

function Customer({currCustomer}) {

    const customers = ["deer", "bear", "elephant", "fly"]
    const flavors = ['banana', 'blueberry', 'grape', 'strawberry']

    return (
        <>
        <div className={"customer " + customers[currCustomer]}>
            <div className={`bubble b-${customers[currCustomer]}` }></div>
        </div>
       </>
    )
}

export default Customer;