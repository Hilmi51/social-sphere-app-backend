const express = require('express');
const router = express.Router();
const {
    getAllLocations,
    getLocationByCountry,
    getLocationById,
    getLocationByProvince,
    locationCreate,
    locationDelete,
    locationUpdate
} = require('../controllers/location.controller.js');

router.get('/getAllLocations', getAllLocations);
router.get('/getLocationById/:id', getLocationById);
router.get('/getLocationByCountry/:country', getLocationByCountry);
router.get('/getLocationByProvince/:province', getLocationByProvince);
router.post('/locationCreate', locationCreate);
router.put('/locationUpdate/:id', locationUpdate);
router.delete('/locationDelete/:id', locationDelete);

module.exports = router;