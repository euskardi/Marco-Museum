const express = require('express');
const router = express.Router();

const citasController = require('../controllers/citas');

router.get('/', citasController.getAllCitas);

router.post('/add', citasController.addCita);

router.get('/user/:object', citasController.getCitaUsuario);

router.get('/date/:object', citasController.getCitaFecha);

router.post('/update/:object', citasController.updateCita);

router.delete('/delete/:object', citasController.deleteCita);


module.exports = router;