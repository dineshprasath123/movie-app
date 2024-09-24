import React from 'react'
import "./navbar.css;"
import { Gi3dGlasses } from "react-icons/gi";

const navbar = () => {
  return (
    <div className="navbar">
        <nav>
        <div className="navbar__brand">
        <span>
        <Gi3dGlasses  fontSize={"30px"} />  
        </span>
        <h1>MOVIES PRO</h1>
        </div>
        <div className="navbar__menu">
            <ul>
            <li>HOME</li>
            <li>MOVIES</li>
            <li>EVENTS</li>
            <li>TAILERS</li>
            <li>CONTACTS</li>
            </ul>
        </div>
      </nav>
    </div>
  )
}

export default navbar
