import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import './Header.css';

function Header() {
    const [collapsed, setCollapsed] = useState(true);

    const toggleNavbar = () => setCollapsed(!collapsed);

    return (
        <header>
            <Navbar color="light" light>
                <NavbarBrand href="/" className="mr-auto ml-3">ESTHER MIN</NavbarBrand>
                <NavbarToggler onClick={toggleNavbar} className="mr-2" />

                <Collapse isOpen={!collapsed} navbar>
                    <Nav navbar>
                        <NavItem>
                            <NavLink href="/about/">About</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/portfolio/">Portfolio</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="https://drive.google.com/file/d/1wJNz1F6k_fdF96dHhPBqXjC9Bm1QSn14/view" target="_blank">Resume</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/contact/">Contact</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>

            </Navbar>
        </header>
    );
}

export default Header;