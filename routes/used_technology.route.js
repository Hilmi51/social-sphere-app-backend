const express = require('express');
const router = express.Router();
const {
    getUsedTechnologyById,
    getAllUsedTechnologies,
    getUsedTechnologyByCategoryId,
    usedTechnologyCreate,
    usedTechnologyDelete,
    usedTechnologyUpdate
} = require('../controllers/used_technology.controller.js');

router.get('/get-all', getAllUsedTechnologies);
router.get('/get-by-id/:id', getUsedTechnologyById);
router.get('/get-by-category-id/:id', getUsedTechnologyByCategoryId);
router.post('/create', usedTechnologyCreate);
router.put('/update/:id', usedTechnologyUpdate);
router.delete('/delete/:id', usedTechnologyDelete);

module.exports = router;