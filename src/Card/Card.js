import React from 'react'
import './card.css'

function Card(props) {
    return (
        <div className='card'>
            <p>{props.id}</p>
            <p>{props.name}</p>
            <p>{props.price}</p>
            <p>{props.size}</p>
            <p>{props.form}</p>
            <p>{props.color}</p>
            <p>{props.material}</p>
            <img src={props.img}></img>
            <button>Add to Bag</button>
        </div>
    )
}
export default Card;