const express = require('express');
const router = express.Router();
const userController = require('../controller.js/userController');

router.post('/', userController.create);
router.get('/', userController.getAll);
router.get('/:id', userController.getOne);
router.put('/:id', userController.updateOne);
router.delete('/:id', userController.deleteOne);




module.exports = router;