const mongoose = require('mongoose');
const MovieModel = require('../controllers/movies.js');
const MoviesModel = require('../models/movies.js')

const getAllMovies = async() => {
    const movies = await MoviesModel.find({});
    return movies;
};

module.exports = {
    getAllMovies
};