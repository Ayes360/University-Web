const mongoose = require("mongoose"); 

const Campus = mongoose.Schema({

        imageURL : String, 
        program : String, 
        enroll : String, 
        description : String,   
});

module.exports = mongoose.model('campus', Campus) // (collection , Schema)