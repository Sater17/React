import React from 'react'

function Input() {
    return (
        <div>
            <input id='input' type='text'></input>
            <button onClick={ProValue()}>Print</button>
            <div id='res'></div>
        </div>
    )
}
function ProValue() {
    let value = document.getElementById('input').value;
    value = toString(value);
    let arr = value.split(',');
    let button=document.getElementById('res');

    return (
        button.innerHTML=arr[Math.floor(Math.random()*arr.length())]
    )
}

const PageOne = function () {
    return (
        <Input></Input>
    )
}
export default PageOne;