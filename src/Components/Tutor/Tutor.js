/*---------------------------------------------------------------
      File  Initialize                
---------------------------------------------------------------*/

import React, { useState , useEffect} from 'react';
import Employ from '../Employ/Employ';





const Tutor = () => {
//State Declare
    const [tutors, setTutors] = useState([]);
    

//Loaed Data

        useEffect(() => {fetch('./Fackdata.JSON')
        .then(res => res.json())
        .then(data => setTutors(data))
        },
    []);

    
// Employ Part Create    
    return (
        <div>
            <h1>Classes Taught by Real Creators</h1>
            <div className="Couse">
                

                {
                tutors.map(tutor => <Employ
                     key={tutor.id}
                     tutor= {tutor}
                     />)
            }
            </div> 
            </div>
    );
};


// Export File
export default Tutor;