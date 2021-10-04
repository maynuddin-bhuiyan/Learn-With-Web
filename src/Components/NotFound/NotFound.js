/*---------------------------------------------------------------
      File  Initialize                
---------------------------------------------------------------*/
import React from 'react';
import "./NotFound.css";
import notfoud from '../../imges/404-page-template-for-xd-1.png';



// NotFound Part
const NotFound = () => {
    return (
        <div className="notfound">
         <h1> It's 404 Error</h1> 
         <img src={notfoud} alt="" srcset="" />  
         
        </div>
    );
};


// Export File
export default NotFound;