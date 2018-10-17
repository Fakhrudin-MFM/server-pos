const express = require('express')
const router = express.Router()
const user = require('../controllers/user.ctrl')

router.get('/', user.all);
router.get('/:id/', user.detail);
router.post('/', user.create);
router.put('/:id/', user.update);
router.delete('/:id/', user.delete);

module.exports = router;