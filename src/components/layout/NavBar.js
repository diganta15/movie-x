import React from 'react';
import {Link} from "react-router-dom"

const NavBar = () => {
    return (
        <div className="nav-bar">
         <div className="grid grid-3 sp">
             <ul className="pages sp pages-left">
                 <li className="link list-none pointer"><Link to="/">Home</Link></li>
                 <li className="link list-none pointer"><Link to="/browse">Browse</Link></li>
                 <li className="link list-none pointer"><Link to="/search">Search</Link></li>
             </ul>
             <h1 className="title-text">Movies X</h1>
             <ul className="pages sp pages-right">
                 <li className="link list-none pointer">About</li>
                 <li className="link list-none pointer">Privacy Policy</li>
                 <li className="link list-none pointer">API</li>
             </ul>
         </div>
        </div>
    )
}

export default NavBar
