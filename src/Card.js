import React from 'react'

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
        </div>
    )
}
export default Card;