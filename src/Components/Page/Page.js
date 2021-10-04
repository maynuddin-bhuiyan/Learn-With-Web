/*---------------------------------------------------------------
      File  Initialize                
---------------------------------------------------------------*/


import React from 'react';
import "./Page.css";
import imge from '../../imges/Screenshot_1.png';



// Page Part 
const Page = () => {
    return (
        <div className="images">
            <h1>Our All Pages A Demo Simple Screenshot</h1>

            <img src={imge} alt="" srcset="" />
        </div>
    );
};


// Export File
export default Page;