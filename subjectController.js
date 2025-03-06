 
const Subject = require('../models/Subject');


exports.getSubjects = async (req, res, next) => {
  try {
    const subjects = await Subject.find({ userId: req.userId });
    res.status(200).json({ success: true, data: subjects });
  } catch (error) {
    next(error);
  }
};

exports.createSubject = async (req, res, next) => {
  try {
    const { name, description } = req.body;

    const subject = await Subject.create({
      userId: req.userId,
      name,
      description,
    });

    res.status(201).json({ success: true, data: subject });
  } catch (error) {
    next(error);
  }
};

exports.updateSubject = async (req, res, next) => {
  try {
    const { name, description } = req.body;

    const subject = await Subject.findOneAndUpdate(
      { _id: req.params.id, userId: req.userId },  
      { name, description },
      { new: true, runValidators: true }
    );

    if (!subject) {
      return res.status(404).json({ success: false, message: 'Asignatura no encontrada' });
    }

    res.status(200).json({ success: true, data: subject });
  } catch (error) {
    next(error);
  }
};


exports.deleteSubject = async (req, res, next) => {
  try {
    const subject = await Subject.findOneAndDelete({
      _id: req.params.id,
      userId: req.userId,  
    });

    if (!subject) {
      return res.status(404).json({ success: false, message: 'Asignatura no encontrada' });
    }

    res.status(200).json({ success: true, message: 'Asignatura eliminada' });
  } catch (error) {
    next(error);
  }
};