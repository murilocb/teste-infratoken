const mongoose = require('mongoose');
const envs = require('../envs')

const uri = envs.MONGODB_URI || 'mongodb://localhost:27017/marsRoverDB';

async function connect() {
  try {
    await mongoose.connect(uri);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1);
  }
}

module.exports = {
  connect
};
