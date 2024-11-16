import React from 'react';
import { useNavigate } from 'react-router-dom';

const SearchResultsPage = ({ projects }) => {
    const navigate = useNavigate();

    return (
        <div className="search-results-page">
            <h1>Search Results</h1>
            <div className="project-cards">
                {projects.length > 0 ? (
                    projects.map((project) => (
                        <div key={project._id} className="project-card">
                            <h2>{project.title}</h2>
                            <p>{project.description}</p>
                            <a href={project.url} target="_blank" rel="noopener noreferrer">
                                View Project
                            </a>
                        </div>
                    ))
                ) : (
                    <p>No projects found.</p>
                )}
            </div>
        </div>
    );
};

export default SearchResultsPage;
