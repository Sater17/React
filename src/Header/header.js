import React from 'react'
import { Link } from 'react-router-dom'
import './header.css'

const Header = () => {
    return(
        <div>
            <ul>
              <li><Link to='/page1.js'>Page-One</Link></li>
              <li><Link to='/page2.js'>Page-One</Link></li>
              <li><Link to='/page3.js'>Page-One</Link></li>
            </ul>
        </div>
    )
}
export default Header;