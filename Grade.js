 
const mongoose = require('mongoose');

const gradeSchema = new mongoose.Schema({
  subjectId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Subject',
    required: true,
  },
  grade: {
    type: Number,
    required: [true, 'La calificación es obligatoria'],
    min: [0, 'La calificación mínima es 0'],
    max: [100, 'La calificación máxima es 100'],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Grade', gradeSchema);