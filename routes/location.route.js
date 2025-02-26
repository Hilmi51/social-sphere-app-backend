const express = require('express');
const router = express.Router();
const {
    getAllLocations,
    getLocationById,
    locationCreate,
    locationUpdate,
    locationDelete
} = require('../controllers/location.controller.js');

router.get('/get-all', getAllLocations);
router.get('/get-by-id/:id', getLocationById);
router.post('/create', locationCreate);
router.put('/update/:id', locationUpdate);
router.delete('/delete/:id', locationDelete);

module.exports = router;