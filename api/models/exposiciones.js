const mongoose = require("mongoose");
const exposiciones = require("../controllers/exposiciones");
const Schema = mongoose.Schema

const exposicionSchema = new Schema({
    sName: {
        type: String
    },
    iYear: {
        type: Number
    },
    sGenre: {
        type: String,
    },
    sOverview: {
        type: String,
    },
    arrImages: [{
        type: String,
    }]   
}, {
    timestamps: true
});

const Exposicion = mongoose.model('Exposicion', exposicionSchema)
module.exports = Exposicion;