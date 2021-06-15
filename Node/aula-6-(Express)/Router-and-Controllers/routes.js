const express = require('express');
const route = express.Router();
const homeController = require('./controllers/homeController');
const contactController = require('./controllers/contactController'); 

// Homepage routes
route.get('/', homeController.homePage);
route.post('/', homeController.postController);

// Contact page routes
route.get('/contact', contactController.contactPage);

module.exports = route;