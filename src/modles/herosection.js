const mongoose = require('mongoose'); 

const herosection = mongoose.Schema({

    imageURL: String, 
    titile: String, 
    description: String
}); 

module.exports = mongoose.model('herosection', herosection)