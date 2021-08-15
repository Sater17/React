import React from 'react'

function Add(props){
    return(
        <div className='add'>
            <form onSubmit={props.onSubmit}>
                <label>ADD:</label>
                <input type='text' name='addCloth'
                placeholder='id: name: price: size:...'></input>               
                <button>thêm</button>
            </form>
        </div>
    )
}
export default Add;