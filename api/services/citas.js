const mongoose = require('mongoose');
const citaModel = require('../controllers/citas.js');
const Cita = require('../models/citas.js');
const CitasModel = require('../models/citas.js')

const getAllCitas = async() => {
    const citas = await CitasModel.find({});
    return citas;
};

const addCita = async (fecha, usuario, turno) => {   
    const citamodel = new CitasModel({
        fecha: fecha,
        usuario: usuario,
        turno: turno
    });

    const newCita = await citamodel.save();
    return newCita;
};

const getCitaUsuario = async(usuario) => {
    const cita = await CitasModel.find({ usuario });
    return cita;        
};

const getCitaFecha = async(fecha) => {
    const today = new Date(fecha);
    const cita = await CitasModel.find({
        fecha : {
            $gte: new Date(today.getFullYear(), today.getMonth(), today.getDate()),
            $lt: new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1)
        }

    });
    return cita;        
};

const isFill = async(fecha, turno) => {
    const today = new Date(fecha);

    const cita = await CitasModel.find({
        fecha : {
            $gte: new Date(today.getFullYear(), today.getMonth(), today.getDate()),
            $lt: new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1)
        },
        turno : turno
    });
    return cita.length;        
};

const updateCita = async(_id, usuario, fecha, turno) => {

    try{
        const cita = await CitasModel.findOne({ _id });

        cita.usuario = usuario,
        cita.fecha = fecha,
        cita.turno = turno,

        await cita.save()

        return cita;

    } catch (err) {
        return false;
    }

};

const deleteCita = async(_id) => {

    try{
        await CitasModel.findOneAndDelete({ _id });

        return true;

    } catch (err) {
        return false;
    }

};

module.exports = {
    getAllCitas,
    addCita,
    getCitaFecha,
    getCitaUsuario,
    updateCita,
    deleteCita,
    isFill
};