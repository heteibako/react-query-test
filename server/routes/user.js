const express = require('express');
const router = express.Router();
const { getAllUsers, addNewUser, deleteUser } = require('../controllers/user');

router.route('/').get(getAllUsers);
router.route('/').post(addNewUser);
router.route('/').delete(deleteUser);

module.exports = router;
