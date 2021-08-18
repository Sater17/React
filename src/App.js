import React, { useState, useEffect, useRef } from 'react'
import Shop from './Shop/Shop.js'
import Add from './Add'
import postData, { getEndpoint, addEndpoint } from './api.js'



function App() {
    let [cloth, setCloth] = useState({})
    let [flag, setFlag] = useState(true)

    useEffect(() => {
        postData(getEndpoint, {})
            .then(data => {
                setCloth(data)
            }).catch((e) => { console.log(e) })
    }, [flag])

    function handleSubmit(e) {
        let addCloth = e.target.addCloth.split(':')
        let res = {}
        res[0] = addCloth[0]
        for (let i = 0; i < res.length; i++) {

        }
        // id: addCloth[0]:{
        //     name: addCloth[1]
        //     price:
        //     size:
        //     form:
        //     color:
        //     material:
        //     img:
        // }

    }
    // postData(addEndpoint, { data: addCloth })
    //     .then(data => {
    //         if (data.status === "fail") setCloth(cloth)
    //         else {
    //             setCloth(data.results)
    //             setFlag(false)
    //         }
    //     }).catch((e) => { console.log(e) })

    let count =useRef(0)
    function clickHandler(e){
        console.log('as')
        count.current+=1
        console.log(count.current)
    }

    return (
        <div className='app'>
            <Shop data={cloth}
            onClick={clickHandler}></Shop>
            
            <Add onSubmit={handleSubmit}></Add>
        </div>
    )
}
export default App;