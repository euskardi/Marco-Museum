const express = require('express');
const router = express.Router();

const PeliculasController = require('../controllers/peliculas');

router.get('/', PeliculasController.getAllPeliculas);

module.exports = router;