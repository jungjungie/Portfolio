import React, { useState } from 'react';
import NavBar from '../NavBar/NavBar';
import { Route } from "react-router-dom";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav } from 'reactstrap';
import './Header.css';

function Header(props) {
    const [collapsed, setCollapsed] = useState(true);

    const toggleNavbar = () => setCollapsed(!collapsed);

    return (
        <header>
            <Navbar color="light" light className="fixed-top shadow-sm border-bottom">
                <NavbarBrand href="/" className="mr-auto ml-3">ESTHER MIN</NavbarBrand>
                <NavbarToggler onClick={toggleNavbar} className="mr-2" />

                <Collapse isOpen={!collapsed} navbar>
                    <Nav navbar>
                        <NavBar />
                        <Route exact path="/about" component={props.About} />
                        <Route exact path="/portfolio" component={props.Portfolio} />
                        <Route exact path="/contact" component={props.Contact} />
                    </Nav>
                </Collapse>

            </Navbar>
        </header>
    );
}

export default Header;