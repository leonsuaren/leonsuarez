const Projects = require('../models/projects');

exports.allProjects = async (req, res) => {
  try {
    const projects = await Projects.find({});
    res.status(200).json({projects: projects});
  } catch (error) {
    res.status(400).json({ error: error });
  }
}