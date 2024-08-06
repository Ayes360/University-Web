const mongoose = require('mongoose'); 

const Vdata = mongoose.Schema({

    amount: String, 
    name : String
})

module.exports = mongoose.model('vdata', Vdata) // (collection , Schema)