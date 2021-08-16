import React from 'react'

const NavBar = () => {
    return (
        <div className="nav-bar">
         <div className="grid grid-3 sp">
             <ul className="pages sp pages-left">
                 <li className="link list-none pointer">Top</li>
                 <li className="link list-none pointer">Browse</li>
                 <li className="link list-none pointer">Search</li>
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
