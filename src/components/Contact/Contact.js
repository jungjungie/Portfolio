import React from 'react';
import { Container, Row, Col, Card, CardText } from 'reactstrap';
import './Contact.css';

function Contact() {
    return (
        <section id="contact-section">
            <Container>
                <Row className="title-rows">
                    <Col><h2 className="section-titles"><span id="contact-pipe" className="title-pipes">|</span> Contact</h2></Col>
                </Row>
                <Row>
                    <Col xs="6" sm="3">
                        <Card body className="text-center contact-cards shadow-sm hvr-underline-from-center2">
                            <a href="mailto:estherjmin@gmail.com">
                            <i className="fa fa-envelope " aria-hidden="true"></i>
                            <CardText className="">Email</CardText>
                            </a>
                        </Card>
                    </Col>
                    <Col xs="6" sm="3">
                        <Card body className="text-center contact-cards shadow-sm hvr-underline-from-center2">
                            <a href="tel:1-267-679-0661"> 
                            <i className="fa fa-phone" aria-hidden="true"></i>
                            <CardText>267-679-0661</CardText>
                            </a>
                        </Card>
                    </Col>
                    <Col xs="6" sm="3">
                        <Card body className="text-center contact-cards shadow-sm hvr-underline-from-center2">
                            <a href="https://github.com/jungjungie" target="_blank" rel="noopener noreferrer">
                            <i className="fa fa-github " aria-hidden="true"></i>
                            <CardText>GitHub</CardText>
                            </a>
                        </Card>
                    </Col>
                    <Col xs="6" sm="3">
                        <Card body className="text-center contact-cards shadow-sm hvr-underline-from-center2">
                            <a href="https://www.linkedin.com/in/esther-j-min/" target="_blank" rel="noopener noreferrer">
                            <i className="fa fa-linkedin-square " aria-hidden="true"></i>
                            <CardText>LinkedIn</CardText>
                            </a>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Contact;