const ExposicionesService = require('../services/exposiciones');

module.exports = {
    getAllExposiciones: async(req, res, next) => {
        const exposiciones = await ExposicionesService.getAllExposiciones();
        res.status(200).json({exposiciones});
    },

    addExposicion: async (req, res, next) => {
        const {sName, iYear, sGenre, sOverview, arrImages} = req.body;

        const newExposicion = await ExposicionesService.addExposicion(sName, iYear, sGenre, sOverview, arrImages)
        res.status(201).json({
            message: "Exposicion Agregada",
            newExposicion
        });
    },

    getExposicion: async (req, res, next) => {
        const exposicion = await ExposicionesService.getExposicion(req.params.object);
        //console.log(req.params.object)
        if (exposicion){
            res.status(200).json({exposicion});
        }else{
            res.status(404).json({"message": "NotFound"});
        }
    },

    updateExposicion: async (req, res, next) => {
        const sName = req.params.object;
        const sNameNew = req.body.sName;
        const iYear = req.body.iYear;
        const sGenre = req.body.sGenre;
        const sOverview = req.body.sOverview;
        const arrImages = req.body.arrImages;
        
        const updateExposicion = await ExposicionesService.updateExposicion(sName, sNameNew, iYear, sGenre, sOverview, arrImages)
        res.status(201).json({
            message: "Exposicion Actualizada",
            updateExposicion
        });
    },


    deleteExposicion: async (req, res, next) => {
        const sName = req.params.object;
        console.log(sName);
        const result = await ExposicionesService.deleteExposicion(sName)
        if (result){
            res.status(201).json({
                message: "Exposicion Eliminada",
            });
        } else {
            res.status(404).json({"message": "NotFound"});
        }

    }
};