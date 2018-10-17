const express = require('express');
const router = express.Router();

// import routes
const user = require('./user.routes');
const home = require('./home.routes');

// use routes
router.use('/user', user);
router.use('/', home);

module.exports = router;