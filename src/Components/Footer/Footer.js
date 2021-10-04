/*---------------------------------------------------------------
      File  Initialize                
---------------------------------------------------------------*/

import { faSchool } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import "./Footer.css";



// Footer Part
const Footer = () => {
    return (
        <div>
            <footer>
                <div className="Icons">
                    <FontAwesomeIcon className="footer-icon" icon={faSchool} />
                    <p>Copyright &copy; 2025 web-leaen-uxmain.All rights reserved.</p>
                    </div>
                    <div className="text">
                        <h4>Terms &copy; Use </h4>
                        <h4>Privacy Policy </h4>
                        </div>
                        </footer>
                        </div>
                        );
                    };


// Export File
export default Footer;