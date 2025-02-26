const db = require("../models/index.js");

const getAllLocations = async (req, res) => {
    try {
        const locations = await db["Location"].findAll();
        if (!locations) {
            res.status(404).send('Location not found!')
        }
        res.status(200).send(locations);
    } catch (err) {
        console.log(err);
        res.status(500).send('Error getting location!');
    }
}

const getLocationById = async (req, res) => {
    try {
        const location = await db["Location"].findAll({where: {id: req.params.id}});
        if (!location) {
            res.status(404).send('Location not found!');
        }
        res.status(200).send(location);
    } catch (err) {
        console.log(err);
        res.status(500).send('Error getting location!');
    }
}

const locationCreate = async (req, res) => {
    try {
        const location = await db["Location"].create(req.body);
        if (!location) {
            res.status(404).send('Location not created!');
        }
        res.status(201).send('Location created!');
    } catch (err) {
        console.log(err);
        res.status(500).send('Error creating location!');
    }
}

const locationUpdate = async (req, res) => {
    try {
        const location = await db["Location"].update(req.body, {where: {id: req.params.id}});
        if (!location) {
            res.status(404).send('Location not found!');
        }
        res.status(200).send('Location updated!');
    } catch (err) {
        console.log(err);
        res.status(500).send('Error updating location!');
    }
}

const locationDelete = async (req, res) => {
    try {
        const location = await db["Location"].destroy({where: {id: req.params.id}});
        if (!location) {
            res.status(404).send('Location not found!');
        }
        res.status(200).send('Location deleted!');
    } catch (err) {
        console.log(err);
        res.status(500).send('Error deleting location!');
    }
}

module.exports = {
    getAllLocations,
    getLocationById,
    locationCreate,
    locationUpdate,
    locationDelete
}
