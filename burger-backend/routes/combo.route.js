const express = require('express');
const router = express.Router();
const comboController = require('../controllers/combo.controller');
router.get("/",comboController.getCombos);
module.exports = router;