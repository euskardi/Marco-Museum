const CitasService = require('../services/citas');

module.exports = {
    getAllCitas: async(req, res, next) => {
        const citas = await CitasService.getAllCitas();
        res.status(200).json({citas});
    },

    addCita: async (req, res, next) => {
        const {fecha, usuario, turno} = req.body;
        const cita = await CitasService.isFill(fecha, turno);

        if (!cita){
            const newCita = await CitasService.addCita(fecha, usuario, turno)
            res.status(201).json({
                message: "Cita Agregada",
                newCita
            });
        }else{
            res.status(404).json({"message": "Ya Existe"});
        }
    },

    getCitaUsuario: async (req, res, next) => {
        const cita = await CitasService.getCitaUsuario(req.params.object);
        if (cita){
            res.status(200).json({cita});
        }else{
            res.status(404).json({"message": "NotFound"});
        }
    },

    getCitaFecha: async (req, res, next) => {
        const cita = await CitasService.getCitaFecha(req.params.object);
        if (cita){
            res.status(200).json({cita});
        }else{
            res.status(404).json({"message": "NotFound"});
        }
    },

    updateCita: async (req, res, next) => {
        const _id = req.params.object;
        const usuario = req.body.usuario;
        const fecha = req.body.fecha;
        const turno = req.body.turno;

        const cita = await CitasService.isFill(fecha, turno);

        if (!cita){
            const updateCita = await CitasService.updateCita(_id, usuario, fecha, turno);
            res.status(201).json({
                message: "Cita Actualizada",
                updateCita
            });
        }else{
            res.status(404).json({"message": "Ya Existe"});
        }
    },


    deleteCita: async (req, res, next) => {
        const _id = req.params.object;
        const result = await CitasService.deleteCita(_id)
        if (result){
            res.status(201).json({
                message: "Cita Eliminada",
            });
        } else {
            res.status(404).json({"message": "NotFound"});
        }

    }
};