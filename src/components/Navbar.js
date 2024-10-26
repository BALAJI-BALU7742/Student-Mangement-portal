// src/components/Navbar.js
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className="navbar" aria-label="Main Navigation">
            <button onClick={toggleMenu} className="menu-toggle">
                ☰
            </button>
            <div className={`menu ${isOpen ? 'open' : ''}`}>
                <NavLink to="/" activeClassName="active" exact aria-label="Dashboard">
                    Dashboard
                </NavLink>
                <NavLink to="/students" activeClassName="active" aria-label="Student List">
                    Student List
                </NavLink>
                <NavLink to="/add-student" activeClassName="active" aria-label="Register Student">
                    Register Student
                </NavLink>
            </div>
        </nav>
    );
};

export default Navbar;
