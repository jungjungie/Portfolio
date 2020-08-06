import React from 'react';
import Project from '../Project/Project';
import { Container } from 'reactstrap';
import projects from '../../projects.json';

function Portfolio() {
    return (
        <section>
            <Container className="d-flex flex-column align-items-center">
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
            </Container>
        </section>
    )
}

export default Portfolio;