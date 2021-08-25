import React from 'react';
import './css/footerStyle.css';

export default function Footer({ currentPage, handlePageChange }) {

    return (
        <div className="footerSection">
            { 
            currentPage === 'Contact' ?
              <a href="#home" onClick={()=> handlePageChange('Home')}>Back to Home</a>
              :
              <a href="#Contact" onClick={()=> handlePageChange('Contact')}>Get in Touch</a>
            }
        </div>
    )
}