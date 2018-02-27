const mongoose = require('mongoose');
const dbName = 'TodoApp'
mongoose.Promise =  global.Promise;
mongoose.connect(`mongodb://127.0.0.1:27017/${dbName}`);

module.exports  = {mongoose};