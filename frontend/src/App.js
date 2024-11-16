import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import { fetchProjects } from './services/projectService';

const App = () => {
    const [projects, setProjects] = useState([]);
    const [, setFilteredProjects] = useState([]);

    // Fetch projects on component mount
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchProjects();
                setProjects(data);
                setFilteredProjects(data); // Initially display all projects
            } catch (error) {
                console.error('Error fetching projects:', error);
            }
        };
        fetchData();
    }, []);

    // Handle search and open a new tab with results
    const handleSearch = (query) => {
        const filtered = projects.filter((project) =>
            project.title.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredProjects(filtered);

        // Open new tab with filtered results
        const newTab = window.open('', '_blank');
        newTab.document.write('<html><head><title>Search Results</title></head><body>');

        filtered.forEach((project) => {
            newTab.document.write(`
                <div style="margin-bottom: 20px;">
                    <h2>${project.title}</h2>
                    <img src="${project.image}" alt="${project.title}" style="width: 200px;" />
                    <p><a href="${project.url}" target="_blank">View Project</a></p>
                </div>
            `);
        });

        newTab.document.write('</body></html>');
        newTab.document.close();
    };

    return (
        <div>
            <Header onSearch={handleSearch} />
            {/* Optionally, display filtered results here too */}
        </div>
    );
};

export default App;
