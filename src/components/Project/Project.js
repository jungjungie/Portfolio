import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Row, Col } from 'reactstrap';
import "./Project.css"

function Project(props) {
    return (
        <Card className="mt-2 mb-2 project-cards shadow-sm">
            <Row className="no-gutters">
                <Col>
                    <CardImg top width="100%" src={props.image} alt="project snapshot" />
                </Col>
                <Col>
                    <CardBody>
                        <CardTitle>{props.title}</CardTitle>
                        <CardText>{props.description}</CardText>
                        <p className="project-tech">
                            <small className="text-muted">{props.tech}</small>
                        </p>
                        <p>
                            <small className="text-muted">{props.date}</small>
                        </p>
                        <a href={props["deployed-url"]} target="_blank" rel="noopener noreferrer">
                            <i className="fa fa-2x fa-globe mr-4" aria-hidden="true"></i>
                        </a>
                        <a href={props["gh-url"]} target="_blank" rel="noopener noreferrer">
                            <i className="fa fa-2x fa-github " aria-hidden="true"></i>
                        </a>
                    </CardBody>
                </Col>
            </Row>
        </Card>
    )
}

export default Project;