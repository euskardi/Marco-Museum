const mongoose = require("mongoose");
const citas = require("../controllers/citas");
const Schema = mongoose.Schema

const citaSchema = new Schema({
    fecha: {
        type: Date
    },
    usuario: {
        type: String
    },
    turno: {
        type: Number
    }
}, {
    timestamps: true
});

const Cita = mongoose.model('Cita', citaSchema)
module.exports = Cita;