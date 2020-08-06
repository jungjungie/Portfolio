import React from 'react';
import { Row, Col } from 'reactstrap';

const Footer = () => {
    return (
        <footer>
            <Row>
                <Col className="text-center"><i class="fa fa-envelope " aria-hidden="true"></i></Col>
                <Col className="text-center"><i class="fa fa-phone" aria-hidden="true"></i></Col>
                <Col className="text-center"><i class="fa fa-github " aria-hidden="true"></i></Col>
                <Col className="text-center"><i class="fa fa-linkedin-square " aria-hidden="true"></i></Col>
            </Row>
            <Row>
                <Col className="text-center">Email</Col>
                <Col className="text-center">267-679-0661</Col>
                <Col className="text-center">GitHub</Col>
                <Col className="text-center">LinkedIn</Col>
            </Row>
        </footer>
    );
}

export default Footer;