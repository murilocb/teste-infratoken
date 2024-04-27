const Log = require('../models/logModel');

async function insertLog(direction) {
  try {
    const log = new Log(direction);
    await log.save();
    console.log('Log inserted successfully');
  } catch (error) {
    console.error('Error inserting log:', error);
    throw error;
  }
}

module.exports = insertLog;