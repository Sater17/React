import React, { useState } from 'react'
import { Items } from '../Shop/Shop.js'
import './Pay.css'

let value = 0
function SubmitHandler(e) {
    e.preventDefault()
    value = Number(e.target.input.value)
}
function Payment() {
    let [sum, setSum] = useState(0)
    setSum(sum+1)
    return (
        <div className=''>
            <h1>Summary:{sum}</h1>
        </div>
    )
}
export {SubmitHandler};
export default Payment;