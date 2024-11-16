import axios from 'axios';

// Function to fetch projects from the backend
export const fetchProjects = async () => {
    try {
        const response = await axios.get('http://localhost:5000/api/projects');
        return response.data;
    } catch (error) {
        console.error('Error fetching projects:', error);
        return [];
    }
};
