import React from 'react'
import { Route,Link, Switch,BrowserRouter as Router } from 'react-router-dom'
import Header from './Header/header.js'
import PageOne from "./page1.js";

const App = function(){
    return(
        <div>
            <Router>
                <Header></Header>
                <Switch>
                    <Router path='/page1' exact>
                        <PageOne></PageOne>
                    </Router>
                </Switch>
            </Router>
        </div>
    )
}
export default App