const mongoose = require('mongoose');
const exposicionModel = require('../controllers/exposiciones.js');
const ExposicionesModel = require('../models/exposiciones.js')

const getAllExposiciones = async() => {
    const exposiciones = await ExposicionesModel.find({});
    return exposiciones;
};

const addExposicion = async (sName, iYear, sGenre, sOverview, arrImages) => {   
    const exposicionmodel = new ExposicionesModel({
        sName: sName,
        iYear: iYear,
        sGenre: sGenre,
        sOverview: sOverview,
        arrImages : arrImages
    });

    const newExposicion = await exposicionmodel.save();
    return newExposicion;
};

const getExposicion = async(sName) => {
    const exposicion = await ExposicionesModel.find({ sName });
    return exposicion;        
};

const updateExposicion = async(sName, sNameNew,iYear, sGenre, sOverview, arrImages) => {

    try{
        const exposicion = await ExposicionesModel.findOne({ sName });

        exposicion.sName = sNameNew,
        exposicion.iYear = iYear,
        exposicion.sGenre = sGenre,
        exposicion.sOverview = sOverview,
        exposicion.arrImages = arrImages
        await exposicion.save()

        return exposicion;

    } catch (err) {
        return false;
    }

};

const deleteExposicion = async(sName) => {

    try{
        await ExposicionesModel.findOneAndDelete({ sName });

        return true;

    } catch (err) {
        return false;
    }

};

module.exports = {
    getAllExposiciones,
    addExposicion,
    getExposicion,
    updateExposicion,
    deleteExposicion
};