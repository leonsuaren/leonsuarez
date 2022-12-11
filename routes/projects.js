const express = require('express');
const router = express.Router();

const { allProjects, createProject, deleteProject } = require('../controllers/projects');

router.route('/').get(allProjects);
router.route('/create-project').post(createProject);
router.route('/delete-project').delete(deleteProject);

module.exports = router;