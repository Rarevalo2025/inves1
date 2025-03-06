const express = require('express');
const router = express.Router();
const { verifyToken } = require('../middlewares/authMiddleware');
const {
  getGrades,
  createGrade,
  updateGrade,
  deleteGrade,
} = require('../controllers/gradeController');  

router.get('/:subjectId/grades', verifyToken, getGrades);  
router.post("/:subjectId/grades", verifyToken, createGrade);  
router.put('/:subjectId/grades/:id', verifyToken, updateGrade);  
router.delete('/:subjectId/grades/:id', verifyToken, deleteGrade);  

module.exports = router;