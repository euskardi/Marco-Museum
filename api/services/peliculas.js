const mongoose = require('mongoose');
const peliculas = require('../controllers/peliculas.js');
const PeliculasModel = require('../models/peliculas.js')

const getAllPeliculas = async() => {
    const peliculas = await PeliculasModel.find({});
    return peliculas;
};

module.exports = {
    getAllPeliculas
};