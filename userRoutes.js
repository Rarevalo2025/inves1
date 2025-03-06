const express = require('express');
const router = express.Router();
const { verifyToken } = require('../middlewares/authMiddleware');
const { getUser, updateUser } = require('../controllers/userController');  

router.get('/:id', verifyToken, getUser); 
router.put('/:id', verifyToken, updateUser);  

module.exports = router;