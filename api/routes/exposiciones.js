const express = require('express');
const router = express.Router();

const ExposicionesController = require('../controllers/exposiciones');

router.get('/', ExposicionesController.getAllExposiciones);

router.post('/addExposicion', ExposicionesController.addExposicion);

router.get('/:object', ExposicionesController.getExposicion);

router.post('/update/:object', ExposicionesController.updateExposicion);

router.delete('/delete/:object', ExposicionesController.deleteExposicion);


module.exports = router;