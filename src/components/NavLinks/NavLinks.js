import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { NavItem, NavLink } from 'reactstrap';
import './NavLinks.css';

function NavLinks() {
    return (
        <>
            <NavItem>
                <Link className="nav-link hvr-underline-from-center" smooth to="#about-section">About</Link>
            </NavItem>
            <NavItem>
                <Link className="nav-link hvr-underline-from-center" smooth to="#portfolio-section">Portfolio</Link>
            </NavItem>
            <NavItem>
                <NavLink className="hvr-underline-from-center" href="https://drive.google.com/file/d/1_jCz2cJW6Na67SkA8J9GfyTWIkeYsgj5/view?usp=sharing" target="_blank" rel="noopener noreferrer">Resume</NavLink>
            </NavItem>
            <NavItem>
                <Link className="nav-link hvr-underline-from-center" smooth to="#contact-section">Contact</Link>
            </NavItem>
        </>
    );
}

export default NavLinks;

// Resources
// React Router Hash Link - https://github.com/rafgraph/react-router-hash-link