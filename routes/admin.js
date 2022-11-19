const express = require('express');
const router = express.Router();

const { createAdmin, adminLogin } = require('../controllers/admin');

router.route('/create-admin').post(createAdmin);
router.route('/admin-login').post(adminLogin);

module.exports = router;