const express = require('express'); 

const routes = express.Router();

//this will route data from DB to navbar
const Detail = require("../modles/deatil"); 
const herosection = require('../modles/herosection');
const services = require('../modles/services');
const academics = require('../modles/academics');
const campus = require('../modles/campus')
const teacher = require("../modles/teacher")
const Vdata = require("../modles/visualData")


//index file will show data on main page. 
routes.get('/', async(request, response)=>{

    const details = await Detail.findOne({"_id":"663a8a2d475c5bb838288d31"}); 

    const hero = await herosection.findOne({"_id":"663b5db97f0d5f84790ee2ce"}); 

    const service = await services.find(); 

    const academic = await academics.find(); 

    const Campus = await campus.find(); 

    const Teacher = await teacher.find(); 

    const vdata = await Vdata.find(); 

    // console.log(Teacher); 

    //console.log(Campus); 

    // console.log(academic); 

    // console.log(services); 

    // console.log(hero);

    response.render('index', { 
        details : details, 
        hero : hero, 
        service : service, 
        academic : academic, 
        Campus : Campus, 
        Teacher : Teacher, 
        vdata : vdata
    }); 
}); 




module.exports = routes; 