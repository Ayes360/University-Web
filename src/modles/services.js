const mongoose = require("mongoose"); 

const Service = mongoose.Schema({

        imageURL : String, 
        serviceName : String
  
});

module.exports = mongoose.model('services', Service) // (collection , Schema)