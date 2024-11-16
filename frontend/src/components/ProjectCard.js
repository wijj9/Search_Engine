import React from 'react';

const ProjectCard = ({ project }) => {
    return (
        <div className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p>{project.hosting}</p>
        </div>
    );
};

export default ProjectCard;
