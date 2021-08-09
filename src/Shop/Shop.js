import React from 'react'
import './Shop.css'
import {SubmitHandler} from '../Pay/Pay.js'
const Items = [
    { name: 'T-shirt 1', cost: 270 },
    { name: 'T-shirt 2', cost: 150 },
    { name: 'T-shirt 3', cost: 110 },
    { name: 'T-shirt 4', cost: 220 },
    { name: 'T-shirt 5', cost: 180 }
]

function Card(props) {
    return (
        <div className='card' onSubmit={SubmitHandler}>
            <h2>Name: {props.name}</h2>
            <h2>Cost: {props.cost}</h2>
            <form>
                <input name='input' type='text'></input>
                <button>submit</button>
            </form>
        </div>
    )
}
function ListCard() {
    return (
        <div className='container'>
            <Card name={Items[0].name}
            cost={Items[0].cost}>
            </Card>
            <Card name={Items[1].name}
            cost={Items[1].cost}>
            </Card>
            <Card name={Items[2].name}
            cost={Items[2].cost}>
            </Card>
            <Card name={Items[3].name}
            cost={Items[3].cost}>
            </Card>
            <Card name={Items[4].name}
            cost={Items[4].cost}>
            </Card>
        </div>
    )
}
export {Items};
export default ListCard;