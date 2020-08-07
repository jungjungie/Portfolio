import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Container, Row, Col } from 'reactstrap';
import "./Project.css"

function Project(props) {
    return (
        <Card className="mt-2 mb-2 project-cards shadow-sm">
            <Row className="no-gutters align-items-center">
                <Col xs="12" md="6">
                    <a href={props["deployed-url"]} target="_blank" rel="noopener noreferrer"><CardImg top width="100%" src={props.image} alt="project snapshot" /></a>
                </Col>
                <Col xs="12" md="6">
                    <CardBody className="" >
                        <CardTitle><a className="project-titles" href={props["deployed-url"]} target="_blank" rel="noopener noreferrer">{props.title}</a></CardTitle>
                        <CardText>{props.description}</CardText>
                        <p className="project-tech">
                            <small>{props.tech}</small>
                        </p>
                        <p>
                            <small>{props.date}</small>
                        </p>
                        <a className="project-links" href={props["deployed-url"]} target="_blank" rel="noopener noreferrer">
                            <i className="fa fa-2x fa-globe mr-4" aria-hidden="true"></i>
                        </a>
                        <a className="project-links" href={props["gh-url"]} target="_blank" rel="noopener noreferrer">
                            <i className="fa fa-2x fa-github " aria-hidden="true"></i>
                        </a>
                    </CardBody>
                </Col>
            </Row>
        </Card>
    )
}

export default Project;