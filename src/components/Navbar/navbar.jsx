import React from 'react'
import "./navbar.css"
import { Gi3dGlasses } from "react-icons/gi";
import { MdArrowDropDown } from "react-icons/md";
import { FaSearchLocation } from "react-icons/fa";
import { ImMenu3 } from "react-icons/im";

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
        <div className="navbar__search ">
          <div className="navbar__input">
            <input type="text" placeholder='ALL CATEGORY' />
            <MdArrowDropDown />
          </div>
          <div className="navbar__location">
            <input type="text" placeholder='LOCATION' />
            <FaSearchLocation />
          </div>
          <div className="navbar__menubar">
          <ImMenu3 />
          </div>
        </div>
      </nav>
    </div>
  )
}

export default navbar
