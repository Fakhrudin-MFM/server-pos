const express = require('express');
const router = express.Router();
const kategori = require('../controllers/kategori.ctrl');

router.get('/', kategori.all);
router.get('/:id/', kategori.detail);
router.post('/', kategori.create);
router.put('/:id/', kategori.update);
router.delete('/:id/', kategori.delete);

module.exports = router;
