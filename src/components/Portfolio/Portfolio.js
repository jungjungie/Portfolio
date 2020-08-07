import React from 'react';
import Project from '../Project/Project';
import { Container, Row, Col } from 'reactstrap';
import projects from '../../projects.json';
import './Portfolio.css';

function Portfolio() {
    return (
        <section id="portfolio-section">
            <Container>
                <Row className="title-rows">
                    <Col><h2 className="section-titles"><span id="portfolio-pipe" className="title-pipes">|</span> Portfolio</h2></Col>
                </Row>
                <Row className="d-flex flex-column align-items-center">
                    {projects.map(project =>
                        <Project
                            key={project.id}
                            title={project.title}
                            description={project.description}
                            tech={project.tech}
                            date={project.date}
                            gh-url={project["gh-url"]}
                            deployed-url={project["deployed-url"]}
                            image={project.image}
                        />)}
                </Row>
            </Container>
        </section>
    )
}

export default Portfolio;