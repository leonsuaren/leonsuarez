const express = require('express');
const router = express.Router();

const { downloadResume } = require('../controllers/downloads');

router.route('/download-resume').get(downloadResume);

module.exports = router;