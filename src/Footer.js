import React from 'react';
import './css/footerStyle.css';

export default function Footer({ currentPage, handlePageChange }) {

    return (
        <div className="footerSection">
            { currentPage === 'Contact' ?
              <ul>
                <li><a href="#home" onClick={()=> handlePageChange('Home')}>Back to Home</a></li>
              </ul>
              :
              <ul>
                <li><a href="#Contact" onClick={()=> handlePageChange('Contact')}>Get in Touch</a></li>
              </ul>}
        </div>
    )
}