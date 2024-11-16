const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Project = require('./models/projectModel');
const connectDB = require('./config/db');

dotenv.config();
connectDB();

const seedProjects = async () => {
    const sampleProjects = [
        {
            title: 'Project 1',
            description: 'Description of Project 1',
            url: 'https://github.com/project1',
            logo: '/images/project1-logo.png',
            hosting: 'GitHub',  // Add hosting
        },
        {
            title: 'Project 2',
            description: 'Description of Project 2',
            url: 'https://github.com/project2',
            logo: '/images/project2-logo.png',
            hosting: 'GitHub',  // Add hosting
        },
        {
            title: 'Project 3',
            description: 'Description of Project 3',
            url: 'https://github.com/project3',
            logo: '/images/project3-logo.png',
            hosting: 'GitHub',  // Add hosting
        },
    ];

    try {
        await Project.deleteMany();  // Clear existing data
        await Project.insertMany(sampleProjects);
        console.log('Sample data seeded!');
        process.exit();
    } catch (error) {
        console.error('Error seeding data:', error);
        process.exit(1);
    }
};

seedProjects();
