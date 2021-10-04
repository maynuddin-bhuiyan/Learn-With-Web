/*---------------------------------------------------------------
      File  Initialize                
---------------------------------------------------------------*/

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSchool } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Header.css";


// Header Part
const Header = () => {
    return (
        <div className="Header-part">
            <ul>
{/* Nab Itam               */}
          <li>
            <NavLink to="/home" className="navlink">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about" className="navlink">About</NavLink>
          </li>
          <li>
            <NavLink to="/page" className="navlink">Page</NavLink>
          </li>
          <li>
            <NavLink to="/course" className="navlink">Course </NavLink>
          </li>


           <FontAwesomeIcon className="icon" icon={faSchool} />
          
        </ul>

       
        </div>

    );
};


// Export File
export default Header;