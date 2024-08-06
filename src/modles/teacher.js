const mongoose = require('mongoose'); 

const Teacher = mongoose.Schema({

    icon: String,
    description : String, 
    tag: String, 
    teacherName : String
})

module.exports = mongoose.model('teacher', Teacher) // (collection , Schema)