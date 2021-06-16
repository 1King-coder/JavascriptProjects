const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController');
const contactController = require('./src/controllers/contactController'); 

//  Example
/*
function middleware (request, response, next) {
    request.session = {
        name: 'fulano',
        lastname:'de tal'
    };
    console.log(`\nGot into your middleware\n`);
    next();
};
*/

//  Example
//  route.get('/', middleware, homeController.homePage, (req, res, next) => {
    //      console.log('conection continues')
    //  });
    
// Homepage routes
route.get('/', homeController.homePage);
route.post('/', homeController.postController);

// Contact page routes
route.get('/contact', contactController.contactPage);

module.exports = route;