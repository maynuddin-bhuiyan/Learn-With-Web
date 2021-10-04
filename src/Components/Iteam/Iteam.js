/*---------------------------------------------------------------
      File  Initialize                
---------------------------------------------------------------*/

import React from 'react';
import "./Iteam.css"


//Course Item Generate
const Iteam = (props) => {

// Destructuring Of Course  
    const {name,img,title,degeneration,Industrysupport} = props.course;
    console.log(props);
    return (
//  Create A course Cart       
            <div className="item">
            <h2>{name}</h2>
            <img src={img} alt="" />
            <h3>{title}</h3>
            <p>{degeneration}</p>
            <p><small>{Industrysupport}</small></p>

        </div>
    );
};


// Export File
export default Iteam;