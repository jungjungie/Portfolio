import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { NavItem, NavLink } from 'reactstrap';
import './NavBar.css';

function NavBar() {
    return (
        <>
            <NavItem>
                <Link className="nav-link" smooth to="#about-section">About</Link>
            </NavItem>
            <NavItem>
                <Link className="nav-link" smooth to="#portfolio-section">Portfolio</Link>
            </NavItem>
            <NavItem>
                <NavLink href="https://drive.google.com/file/d/1wJNz1F6k_fdF96dHhPBqXjC9Bm1QSn14/view" target="_blank" rel="noopener noreferrer">Resume</NavLink>
            </NavItem>
            <NavItem>
                <Link className="nav-link" smooth to="#contact-section">Contact</Link>
            </NavItem>
        </>
    );
}

export default NavBar;

// Resources
// React Router Hash Link - https://github.com/rafgraph/react-router-hash-link