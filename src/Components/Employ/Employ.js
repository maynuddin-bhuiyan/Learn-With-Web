/*---------------------------------------------------------------
      File  Initialize                
---------------------------------------------------------------*/

import { faSdCard } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import "./Employ.css";


// Employ Item Generate
const Employ = (props) => {

// Destructuring Of Tutor    
    const {name,img,title} = props.tutor;
    
    return (
        <div>

        <div className="Empoly">
            
            <img src={img} alt="" />
            <h3>Employ {name}</h3>
            <p><small>{title}</small></p>
            <FontAwesomeIcon icon={faSdCard} className="touter" /><span className="text">01908145097</span>

        </div>

        </div>
    );
};

// Export File
export default Employ;