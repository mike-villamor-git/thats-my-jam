import { useEffect, useState } from 'react'
import './App.css'
import './Customer.css'

function Customer({currCustomer, first, second, third, fourth, mood}) {

    const customers = ["deer", "bear", "elephant", "fly"]
    const flavors = ['banana', 'blueberry', 'grape', 'strawberry']
    const status = ['', ` ${customers[currCustomer]}-angry`, ` ${customers[currCustomer]}-happy`]

    return (
        <>
        <div className={"customer " + customers[currCustomer] + status[mood]}>
            <div className={`bubble b-${customers[currCustomer]}` }>
                <div className={`fruit ${flavors[first]} f-1`}></div>
                <div className={`fruit ${flavors[second]} f-2`}></div>
                <div className={`fruit ${flavors[third]} f-3`}></div>
                <div className={`fruit ${flavors[fourth]} f-4`}></div>
            </div>
        </div>
       </>
    )
}

export default Customer;