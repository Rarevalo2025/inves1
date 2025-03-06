const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const helmet = require('helmet');


dotenv.config();


const app = express();
const PORT = process.env.PORT || 5000;


app.use(cors());
app.use(helmet());
app.use(express.json());


mongoose.connect(process.env.MONGO_URI);



app.use('/api/auth', require('./routes/authRoutes')); 
app.use('/api/users', require('./routes/userRoutes'));  
app.use('/api/subjects', require('./routes/subjectRoutes'));  
app.use('/api/grades', require('./routes/gradeRoutes'));  



app.use(require("./middlewares/errorMiddleware").errorHandler); 

app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});