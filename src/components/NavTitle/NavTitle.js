import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { NavbarBrand } from 'reactstrap';
import './NavTitle.css';

function NavTitle() {
    return (
        <NavbarBrand>
            <Link smooth to="#main-section">ESTHER MIN</Link>
        </NavbarBrand>
    )
}

export default NavTitle;

// Resources
// React Router Hash Link - https://github.com/rafgraph/react-router-hash-link