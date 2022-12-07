const Projects = require('../models/projects');

exports.createProject = async (req, res) => {
  const { projectName, projectAutor, projectRepo, projectWebsite, projectDescription } = req.body;
  if (!projectName || !projectAutor || !projectRepo || !projectWebsite || !projectDescription) {
    res.json({ message: "All fields are required" });
  }
  try {
    const project = await Projects.create({ 
      projectName: projectName, 
      projectAutor: projectAutor,
      projectRepo: projectRepo,
      projectWebsite: projectWebsite,
      projectDescription: projectDescription
     });
  res.status(201).json({ message: "Project created success", project: project });
  } catch (error) {
  res.status(500).json({ error: error });
  }
}

exports.allProjects = async (req, res) => {
  try {
    const projects = await Projects.find({});
    res.status(200).json({projects: projects});
  } catch (error) {
    res.status(400).json({ error: error });
  }
}