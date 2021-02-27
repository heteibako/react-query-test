const express = require('express');
const router = express.Router();
const { getAllUsers, addNewUser } = require('../controllers/user');

router.route('/').get(getAllUsers);
router.route('/').post(addNewUser);

module.exports = router;
