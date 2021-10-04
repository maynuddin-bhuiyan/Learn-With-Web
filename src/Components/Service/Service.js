/*---------------------------------------------------------------
      File  Initialize                
---------------------------------------------------------------*/

import { faSchool, faLiraSign,faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import "./Service.css";



//Service Part
const Service = () => {
    return (
        <div className="main-full">
            <h1>Popular Topics to Learn</h1>
        <div className="main">

{/* //Service Itam */}
            <div className="servise">
            <FontAwesomeIcon className="icons" icon={faSchool} />
            <h2>JavaScript</h2>
            <p>In the above program, the month of February is checked if it contains 29 days. If a month of February contains 29 days, it will be a leap year.</p>
            </div>

{/* //Service Itam */}
            <div className="servise">
            <FontAwesomeIcon className="icons" icon={faLiraSign} />
            <h2> React Js </h2>
            <p>React is a free and open-source front-end JavaScript library for building user interfaces or UI components. It is maintained by Facebook and a community</p>
            </div>

{/* //Service Itam */}
            <div className="servise">
            <FontAwesomeIcon className="icons" icon={faStar} />
            <h2> Node Js</h2>
            <p>Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web .</p>
            </div>
        </div>
        </div>
    );
};


// Export File
export default Service;