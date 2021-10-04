/*---------------------------------------------------------------
      File  Initialize                
---------------------------------------------------------------*/

import React from 'react';
import Service from '../Service/Service';
import Tutor from '../Tutor/Tutor';
import "./Home.css";


// Home part
const Home = () => {
    return (
        <div>
            <Service></Service>
            <Tutor></Tutor>
        </div>
    );
};


// Export File
export default Home;