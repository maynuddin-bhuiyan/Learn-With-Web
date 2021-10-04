/*---------------------------------------------------------------
      File  Initialize                
---------------------------------------------------------------*/

import React from 'react';
import "./About.css";
import about from '../../imges/Screenshot_36.png';

const About = () => {
    return (
// About Part        
        <div className="about">
            <h1>About A Demo Simple Screenshot</h1>
            <img src={about} alt="" srcset="" />
        </div>
    );
};

// Export File
export default About;