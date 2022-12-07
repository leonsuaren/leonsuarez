const express = require('express');
const router = express.Router();

const { allProjects, createProject } = require('../controllers/projects');

router.route('/').get(allProjects);
router.route('/create-project').post(createProject);

module.exports = router;