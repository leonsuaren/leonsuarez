const express = require('express');
const router = express.Router();

const { createProfileInfo, getProfileInfo, updateProfileInfo } = require('../controllers/profileInfo');

router.route('/create-profile-info').post(createProfileInfo);
router.route('/profile-info').post(getProfileInfo);
router.route('/update-profile-info').put(updateProfileInfo);

module.exports = router;