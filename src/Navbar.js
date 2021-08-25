import React from 'react';
import './css/navbarStyle.css';

export default function Navbar({ currentPage, handlePageChange }) {
    return (
        <div className="navbar">
            <h1>Jack Ryan Bentsen</h1>
            <ul className="navbar-tabs">
                <li className="navbar-item">
                    <a
                      href="#home"
                      onClick={() => handlePageChange('Home')}
                      className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
                    >
                      Home
                    </a>
                </li>
                <li className="navbar-item">
                    <a
                      href="#about"
                      onClick={() => handlePageChange('About')}
                      className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
                    >
                      About
                    </a>
                </li>
                <li className="navbar-item">
                    <a
                      href="#work"
                      onClick={() => handlePageChange('Work')}
                      className={currentPage === 'Work' ? 'nav-link active' : 'nav-link'}
                    >
                      Work
                    </a>
                </li>
                <li className="navbar-item">
                    <a
                      href="#contact"
                      onClick={() => handlePageChange('Contact')}
                      className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
                    >
                      Contact
                    </a>
                </li>
            </ul>
        </div>
    )
}