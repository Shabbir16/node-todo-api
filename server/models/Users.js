const mongoose = require('mongoose');

var Users = mongoose.model('Users',{
    email : {
        type : String,
        required : true,
        minlenght : 1,
        trim : true
    }
});

module.exports = {Users};