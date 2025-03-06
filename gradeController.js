 
const Grade = require('../models/Grade');


exports.getGrades = async (req, res, next) => {
  try {
    const grades = await Grade.find({ subjectId: req.params.subjectId });
    res.status(200).json({ success: true, data: grades });
  } catch (error) {
    next(error);
  }
};

exports.createGrade = async (req, res, next) => {
  try {
    const { grade } = req.body;

    const newGrade = await Grade.create({
      subjectId: req.params.subjectId,
    });

    res.status(201).json({ success: true, data: newGrade });
  } catch (error) {
    next(error);
  }
};

exports.updateGrade = async (req, res, next) => {
  try {
    const { grade } = req.body;

    const updatedGrade = await Grade.findOneAndUpdate(
      { _id: req.params.id, subjectId: req.params.subjectId },
      { grade },
      { new: true, runValidators: true }
    );

    if (!updatedGrade) {
      return res.status(404).json({ success: false, message: 'Calificación no encontrada' });
    }

    res.status(200).json({ success: true, data: updatedGrade });
  } catch (error) {
    next(error);
  }
};


exports.deleteGrade = async (req, res, next) => {
  try {
    const grade = await Grade.findOneAndDelete({
      _id: req.params.id,
      subjectId: req.params.subjectId,
    });

    if (!grade) {
      return res.status(404).json({ success: false, message: 'Calificación no encontrada' });
    }

    res.status(200).json({ success: true, message: 'Calificación eliminada' });
  } catch (error) {
    next(error);
  }
};