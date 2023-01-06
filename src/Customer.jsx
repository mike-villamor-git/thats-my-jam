import { useEffect, useState } from 'react'
import './App.css'
import './Customer.css'

function Customer(props) {

    let customers = ["deer", "bear", "elephant", "fly"]
    let randomCustomer = Math.floor(Math.random() * 5)

    console.log(randomCustomer)
    return (
        <>
        <div className={"customer " + customers[randomCustomer]}>
        </div>
       </>
    )
}

export default Customer;