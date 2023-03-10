const express = require('express');
const router = express.Router();

const { allProjects, createProject, deleteProject, editProject } = require('../controllers/projects');

router.route('/').get(allProjects);
router.route('/create-project').post(createProject);
router.route('/delete-project').post(deleteProject);
router.route('/update-project').put(editProject);

module.exports = router;