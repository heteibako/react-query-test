/* eslint-disable no-undef */
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    console.log('Mongodb connected'.underline.bold.cyan);
  } catch (err) {
    console.error(err.message);

    //exits process with failure

    process.exit(1);
  }
};

module.exports = connectDB;
