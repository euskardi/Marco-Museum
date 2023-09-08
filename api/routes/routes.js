const express = require('express');
const router = express.Router();

router.use('/users', require('./users'));

router.use('/peliculas', require('./peliculas'));

router.use('/movies', require('./movies'));

router.use('/exposiciones', require('./exposiciones'));

router.use('/citas', require('./citas'));

module.exports = router;