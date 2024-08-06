const mongoose = require('mongoose'); 

const Deatil = mongoose.Schema({

    brandName :  String, // dynamic brand name
    brandIconUrl : String, // dynamic brand logo
    // Array for dynamic links 
    links: [
        {
        lable: String, 
        url: String
        },
],
});

module.exports = mongoose.model("detail", Deatil);


