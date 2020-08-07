import React from 'react';
import { Container } from 'reactstrap';
import './Footer.css';

const Footer = () => {
    return (
        <footer id="footer-section">
            <Container className="text-center d-flex justify-content-center align-items-center">
                <p className="mb-0">Copyright &copy; Esther Min</p>
            </Container>
        </footer>
    );
}

export default Footer;