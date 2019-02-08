const express = require('express');
const router = express.Router();

// import routes
const kategori = require('./kategori.routes');
const home = require('./home.routes');

// use routes
router.use('/kategori', kategori);
router.use('/', home);

module.exports = router;
