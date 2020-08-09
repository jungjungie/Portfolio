import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Row, Col } from 'reactstrap';
import "./Project.css"

function Project(props) {
    return (
        <Card className="m-3 mb-md-5 project-cards shadow-sm hvr-grow">
            <Row className="no-gutters align-items-center">
                <Col xs="12" md="6">
                    <a href={props["deployed-url"]} target="_blank" rel="noopener noreferrer"><CardImg className="card-imgs" top width="100%" src={props.image} alt="project snapshot" /></a>
                </Col>
                <Col xs="12" md="6">
                    <CardBody className="" >
                        <CardTitle><a className="project-titles hvr-underline-from-center3" href={props["deployed-url"]} target="_blank" rel="noopener noreferrer">{props.title}</a></CardTitle>
                        <CardText className="project-descriptions">{props.description}</CardText>
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