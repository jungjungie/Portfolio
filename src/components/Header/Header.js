import React, { useState } from 'react';
import NavTitle from '../NavTitle/NavTitle';
import NavBar from '../NavBar/NavBar';
import { Route } from "react-router-dom";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav } from 'reactstrap';
import './Header.css';

function Header(props) {
    const [collapsed, setCollapsed] = useState(true);

    const toggleNavbar = () => setCollapsed(!collapsed);

    return (
        <header>
            <Navbar color="light" light className="fixed-top shadow-sm border-bottom navbar-expand-md">
                <NavTitle />
                <Route exact path="/main" component={props["ESTHER MIN"]} />
                
                <NavbarToggler onClick={toggleNavbar} className="mr-2" />

                <Collapse isOpen={!collapsed} navbar className="justify-content-end">
                    <Nav navbar onClick={() => setCollapsed(true)} >
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