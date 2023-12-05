const express = require('express');
const userController = require('../../application/controller/userController');

const router = express.Router();

router.get('/', userController.getUsers);
router.get('/:userId', userController.getOneUser);
router.get('/:userId/contracts', userController.getContracts);

module.exports = router;
