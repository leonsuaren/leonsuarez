const express = require('express');
const router = express.Router();

const { createProfileInfo, getProfileInfo } = require('../controllers/profileInfo');

router.route('/create-profile-info').post(createProfileInfo);
router.route('/profile-info').get(getProfileInfo);

module.exports = router;