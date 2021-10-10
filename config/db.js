const mongoose = require('mongoose');

const URL = 'mongodb://localhost:27017/RecruitmentArnowa';

const connectDB = async () => {
   const connection = await mongoose.connect(URL,{
      useNewUrlParser: true,
      useUnifiedTopology: true,
   });
   console.log(`MongoDB Connect: ${connection.connection.host}`);
};

module.exports = connectDB;