const db = require("../models/index.js");
const errorWrapper = require("../helpers/error/errorWrapper.js");

const getAllLocations = async (req, res) => {
    try {
        const locations = await db.Location.findAll();
        if (!locations) {
            res.status(404).send('Location not found!')
        }
        res.status(200).send('' + locations);
    } catch (err) {
        console.log(err);
        res.status(500).send('Error getting location!');
    }
}

const getLocationById = async (req, res) => {
    try {
        const location = await db.Location.findAll({where: {id: req.params.id}});
        if (!location) {
            res.status(404).send('Location not found!');
        }
        res.status(200).send('' + location);
    } catch (err) {
        console.log(err);
        res.status(500).send('Error getting location!');
    }
}

const getLocationByCountry = async (req, res) => {
    try {
        const location = await db.Location.findAll({where: {country: req.params.country}});
        if (!location) {
            res.status(404).send('Location not found!');
        }
        res.status(200).send('' + location);
    } catch (err) {
        console.log(err);
        res.status(500).send('Error getting location!');
    }
}

const getLocationByProvince = async (req, res) => {
    try {
        const location = await db.Location.findAll({where: {province: req.params.province}});
        if (!location) {
            res.status(404).send('Location not found!');
        }
        res.status(200).send('' + location);
    } catch (err) {
        console.log(err);
        res.status(500).send('Error getting location!');
    }
}

const locationCreate = async (req, res) => {
    try {
        const location = await db.Location.create(req.body);
        res.status(201).send('' + location);
    } catch (err) {
        console.log(err);
        res.status(500).send('Error creating location!');
    }
}

const locationUpdate = async (req, res) => {
    try {
        const location = await db.Location.update(req.body, {where: {id: req.params.id}});
        if (!location) {
            res.status(404).send('Location not found!');
        }
        res.status(200).send('' + location);
    } catch (err) {
        console.log(err);
        res.status(500).send('Error updating location!');
    }
}

const locationDelete = async (req, res) => {
    try {
        const location = await db.Location.destroy({where: {id: req.params.id}});
        if (!location) {
            res.status(404).send('Location not found!');
        }
        res.status(200).send('' + location);
    } catch (err) {
        console.log(err);
        res.status(500).send('Error deleting location!');
    }
}

module.exports = {
    getAllLocations: errorWrapper(getAllLocations),
    getLocationById: errorWrapper(getLocationById),
    getLocationByCountry: errorWrapper(getLocationByCountry),
    getLocationByProvince: errorWrapper(getLocationByProvince),
    locationCreate: errorWrapper(locationCreate),
    locationUpdate: errorWrapper(locationUpdate),
    locationDelete: errorWrapper(locationDelete)
}
