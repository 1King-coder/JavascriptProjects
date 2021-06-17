const mongoose = require('mongoose');

const HomeSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: String
});

const HomeModel = mongoose.model('Home', HomeSchema);

module.exports = HomeModel;

// const HomeModel = require('../models/HomeModel');

/*
HomeModel.find()
    .then(data => console.log(data))
    .catch(error => console.log(error));
*/