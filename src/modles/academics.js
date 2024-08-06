const mongoose = require("mongoose"); 

const Academics = mongoose.Schema({

        imageURL : String, 
        program : String, 
        enroll : String, 
        description : String,   
});

module.exports = mongoose.model('academics', Academics) // (collection , Schema)