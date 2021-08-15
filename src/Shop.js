import React from 'react'
import Card from './Card'
import Data from './Data';

function Shop(props){
    
    return(
        <div className='shop'>
            {Object.keys(props.data).map((value)=>{
                return(
                <Card
                key={value}
                id={value}
                name={props.data[value].name } 
                price={props.data[value].price}
                size={props.data[value].size}
                form={props.data[value].form}
                color={props.data[value].color}
                material={props.data[value].material}
                img={props.data[value].img}></Card>

            )})}
        </div>
    )
}
export default Shop;