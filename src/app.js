// require Expess 
const express = require('express'); 
const hbs = require("hbs"); 
const app = express(); 
const mongoose = require('mongoose'); 
const tailwindcss = require('tailwindcss'); 
const Detail = require("./modles/deatil")
const herosection = require("./modles/herosection")
const service = require ("./modles/services")
const academics = require("./modles/academics")
const campus = require("./modles/campus")
const teacher = require("./modles/teacher")
const vdata = require("./modles/visualData")
// export the main.js file. 
const routes = require('./routes/main');


//Express.static will render all the static data like images on our website
app.use('/static', express.static('public'));
app.use('', routes); 

//(tempalting Engine)
app.set('view engine', 'hbs'); 

//will fetch all the views like INDEX etc
app.set("views", "views"); 

//this is were we will register partials such as header footer
hbs.registerPartials("views/partials"); 

//server is listening
 const PORT = 5556 || process.env.PORT; 
//bd connection 
const mongoURI = 'mongodb+srv://zoopic1999:FAX5BfojYh9TOtys@cluster0.dsdwwio.mongodb.net/'; 
// to connect db atlas
mongoose.connect(mongoURI)
    .then(() => {
        console.log('Connected to MongoDB Atlas');

            //    vdata.create([
            //         {
            //             amount: "4", 
            //             name : "Our Campuses"
            //         },
            //         {
            //             amount: "69", 
            //             name : "Degree Programs"
            //         },
            //         {
            //             amount: "8195", 
            //             name : "Enrolled Studnets"
            //         },
            //         {
            //             amount: "10837", 
            //             name : "Alumni Students"
            //         }
            // ])  
        // Start the server after successfully connecting to the database
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch(err => {
        console.error('Error connecting to MongoDB Atlas:', err.message);
    });


            // herosection.create({
        //     imageURL: "http://localhost:5556/static/img/air-uni-hero.jpg", 
        //     titile: "Air University Mission", 
        //     description: "hi"
        // })

    // Detail.create({
    //     brandName: "Air University",
    //     brandIconUrl: "http://localhost:5556/static/img/logo.png",
    //     links: [
    //         {
    //         lable: "Home", 
    //         url: "/"
    //     },
    //     {
    //         lable: "About", 
    //         url: "/about"
    //     },

    //     {
    //         lable: "Admission", 
    //         url: "/admission"
    //     },
    //     {
    //         lable: "Contact", 
    //         url: "/contact"
    //     },
    //     ],
    // })
    
    // service.create([
        //         {
        //         imageURL : "http://localhost:5556/static/img/aerospace-studie.jpeg", 
        //         serviceName : "Aerospace & Strategic Studies"
        //     },
        //     {
        //         imageURL : "http://localhost:5556/static/img/eingenering.webp", 
        //         serviceName : "Faculty of Engineering"
        //     },
        //     {
        //         imageURL : "http://localhost:5556/static/img/social-science.webp", 
        //         serviceName : "Faculty of Social Sciences"
        //     },
        //     {
        //         imageURL : "http://localhost:5556/static/img//applied-science.webp", 
        //         serviceName : "Basics & Applied Sciences"
        //     },
        //     {
        //         imageURL : "http://localhost:5556/static/img//health-sci.webp", 
        //         serviceName : "Faculty of Health Sciences"
        //     },
        //     {
        //         imageURL : "http://localhost:5556/static/img//aviation.jpeg", 
        //         serviceName : "Institue of Avionics and Areonautics"
        //     },
        //     {
        //         imageURL : "http://localhost:5556/static/img//AI.webp", 
        //         serviceName : "Computing & Artificial Intelligence"
        //     },
        //     {
        //         imageURL : "http://localhost:5556/static/img//managment.webp", 
        //         serviceName : "Air University School of Managment"
        //     }
        // ])


        // academics.create([
        //             {
        //                 imageURL : "http://localhost:5556/static/img/undergrad-studs.jpeg", 
        //                 program : "Undergraduate Programmes", 
        //                 enroll : "Enrolled Students: 6552", 
        //                 description : "Students' professional development and foundation building are both facilitated by their undergraduate education. Our diverse UG programmes turn students into successful people.",  
        //         },
        //         {
        //             imageURL : "http://localhost:5556/static/img/masters.jpeg", 
        //             program : "Master Students", 
        //             enroll : "Enrolled Students 1219", 
        //             description : "Graduate programmes encourage students to be inquisitive and enhance their knowledge and expertise in specialised sectors. As a result, AU has the most MS-level programmes available.",  
        //         },
        //         {
        //             imageURL : "http://localhost:5556/static/img/phd.webp", 
        //             program : "PhD Programmes", 
        //             enroll : "Enrolled Students 266", 
        //             description : "Thus, the goal of the PhD programmes at AU is to provide information that fuels economic progress. However, AU sought to produce knowledge for professional development.",  
        //         }
        //     ])

        //academics.create([
            //         {
            //             imageURL : "http://localhost:5556/static/img/undergrad-studs.jpeg", 
            //             program : "Undergraduate Programmes", 
            //             enroll : "Enrolled Students: 6552", 
            //             description : "Students' professional development and foundation building are both facilitated by their undergraduate education. Our diverse UG programmes turn students into successful people.",  
            //     }
            // ])
