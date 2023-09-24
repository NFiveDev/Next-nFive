const mongoose = require('mongoose')
const InsertCourseSeeds = require('./course')

async function Run() {
  console.log('RUNNING SEED SCRIPT');
  console.log(process.env.MONGO_CONNECTION_PATH)
  try {
    await mongoose.connect(process.env.MONGO_CONNECTION_PATH)
    await InsertCourseSeeds();
    await mongoose.disconnect();
    console.log('Database connection closed. Script finished successfully.');
  }
  catch(error) { 
    console.warn('error', error)
  }
}

  

Run();



