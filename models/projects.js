const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
  projectName: {
    type: String,
    require: true
  },
  projectDescription: {
    type: String,
    require: true
  },
  projectAutor: {
    type: String,
    require: true
  },
  projectImage: {
    data: Buffer,
    contentType: String
  },
  projectRepo: {
    type: String,
    require: true
  },
  projectWebsite: {
    type: String,
    require: true
  }
});

const Projects = mongoose.model('Projects', ProjectSchema);

module.exports = Projects;