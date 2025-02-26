const express = require('express');
const router = express.Router();
const {
    getAllUsedTechnologies,
    getUsedTechnologyById,
    usedTechnologyCreate,
    usedTechnologyUpdate,
    usedTechnologyDelete
} = require('../controllers/used_technology.controller.js');

router.get('/get-all', getAllUsedTechnologies);
router.get('/get-by-id/:id', getUsedTechnologyById);
router.post('/create', usedTechnologyCreate);
router.put('/update/:id', usedTechnologyUpdate);
router.delete('/delete/:id', usedTechnologyDelete);

module.exports = router;