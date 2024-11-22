import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Navbar.css';


const Navbar = () => {
    return (
        <nav>
            <h1>My portfolio</h1>
            <div className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/about">About me</Link>
                <Link to="/projects">Projects</Link>
            </div>
        </nav>
    );
};

export default Navbar;