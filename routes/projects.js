const express = require('express');
const router = express.Router();

const { allProjects } = require('../controllers/projects');

router.route('/').get(allProjects);

module.exports = router;