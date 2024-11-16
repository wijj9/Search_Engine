const Project = require('../models/projectModel');

// Fetch all projects
const getProjects = async (req, res) => {
    const { search } = req.query;
    try {
        const query = search
            ? { $or: [{ title: new RegExp(search, 'i') }, { tags: new RegExp(search, 'i') }] }
            : {};
        const projects = await Project.find(query);
        res.status(200).json(projects);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Add a new project
const createProject = async (req, res) => {
    const { title, description, url, tags, hosting } = req.body;
    try {
        const project = new Project({ title, description, url, tags, hosting });
        await project.save();
        res.status(201).json(project);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = { getProjects, createProject };
