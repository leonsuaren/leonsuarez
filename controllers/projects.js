const Projects = require('../models/projects');
// const fs = require('fs');
// const path = require('path');

exports.createProject = async (req, res) => {
  const { projectName, projectAutor, projectRepo, projectWebsite, projectDescription, projectImage } = req.body;
  // const Image = {
  //   data: fs.readFileSync(path.join(__dirname, '..' + '/uploads/' + projectImage)),
  //   contentType: 'image/png'
  // }
  // var image = Buffer(req.params.image, 'base64').toString('binary');
  // console.log(projectName, projectAutor, projectRepo, projectWebsite, projectDescription)
  if (!projectName || !projectAutor || !projectRepo || !projectWebsite || !projectDescription) {
    res.json({ message: "All fields are required" });
    return
  }
  try {
    const projectExist = await Projects.findOne({ projectName: projectName });
    if (!projectExist) {
      const project = await Projects.create({
        projectName: projectName,
        projectAutor: projectAutor,
        projectRepo: projectRepo,
        projectWebsite: projectWebsite,
        projectDescription: projectDescription,
        projectImage: projectImage
      });
      res.status(201).json({ message: "Project created success", project: project });
      return
    } else {
      res.status(400).json({ message: "Project already exist!" });
    }
  } catch (error) {
    res.status(500).json({ error: error });
  }
}

exports.editProject = async (req, res) => {
  const { projectId, projectName, projectAutor, projectRepo, projectWebsite, projectDescription } = req.body;
  if (!projectName || !projectAutor || !projectRepo || !projectWebsite || !projectDescription) {
    res.json({ message: "All fields are required" });
    return
  }
  try {
    const projectFilter = { _id: projectId };
    const projectNewValues = { 
      projectName: projectName,
      projectAutor: projectAutor,
      projectRepo: projectRepo,
      projectWebsite: projectWebsite,
      projectDescription: projectDescription
     }
    const projectUpdated = await Projects.findByIdAndUpdate( projectFilter, projectNewValues );
    res.status(200).json({ messasge: 'Project Updated Success', projectUpdated: projectUpdated })
  } catch (error) {
    res.status(500).json({ error: error });
  }
}

exports.allProjects = async (req, res) => {
  try {
    const projects = await Projects.find({});
    res.status(200).json({ projects: projects });
  } catch (error) {
    res.status(400).json({ error: error });
  }
}

exports.deleteProject = async (req, res) => {
  const { projectId } = req.body;
  try {
    const project = await Projects.deleteOne({ _id: projectId });
    res.status(201).json({ project: project });
  } catch (error) {
    res.status(400).json({ error: error });
  }
}