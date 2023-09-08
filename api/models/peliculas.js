const mongoose = require("mongoose");
const peliculas = require("../controllers/peliculas");
const Schema = mongoose.Schema

const peliculaSchema = new Schema({
    sName: {
        type: String
    },
    iYear: {
        type: Number
    },
    rated: {
        type: String,
    },
    sGenre: {
        type: String,
    },
    sDuration: {
        type: String,
    },
    sHeadline: {
        type: String,
    },
    sOverview: {
        type: String,
    },
    dScore: {
        type: Number,
    },
    arrImages: [{
        type: String,
    }],
    sLogo: {
        type: String,
    },
    sTrailer: {
        type: String,
    }    
}, {
    timestamps: true
});

const Pelicula = mongoose.model('Pelicula', peliculaSchema)
module.exports = Pelicula;