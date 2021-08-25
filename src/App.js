import React, {useState} from 'react';
import Navbar from './Navbar.js';
import Home from './Home.js';
import About from './About.js';
import Work from './Work.js';
import Contact from './Contact.js';
import Footer from './Footer.js';
import './css/reset.css'

function App() {
    
    const [currentPage, setCurrentPage] = useState('Home');

    const renderPage = () => {
        if (currentPage === 'Home') {
            return <Home />;
        }
        if (currentPage === 'About') {
            return <About />;
        }
        if (currentPage === 'Work') {
            return <Work />;
        }
        if (currentPage === 'Contact') {
            return <Contact />;
        }
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            <head>
                <script src="https://kit.fontawesome.com/812ecae711.js" crossorigin="anonymous"></script>
            </head>
            <Navbar currentPage={currentPage} handlePageChange={handlePageChange}/>
            {renderPage()}
            <Footer currentPage={currentPage} handlePageChange={handlePageChange}/>
        </div>
    )
}

export default App;