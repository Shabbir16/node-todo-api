const mongoose = require('mongoose');
const dbName = 'TodoApp'
mongoose.Promise =  global.Promise;
mongoose.connect(`mongodb://Shabbir16:shabbir@1@ds155218.mlab.com:55218/sample_db`)
//`mongodb://127.0.0.1:27017/${dbName}`);

module.exports  = {mongoose};