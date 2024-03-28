const db = require("../models/index.js");
const errorWrapper = require("../helpers/error/errorWrapper.js");

const getAllMessagePhotos = async (req, res) => {
    try {
        const messagePhoto = await db.MessagePhoto.findAll();
        if (!messagePhoto) {
            res.status(404).send('Message photo not found!');
        }
        res.status(200).send('Listed by all message photo: ' + messagePhoto);
    } catch (err) {
        console.log(err);
        res.status(500).send('Error getting message photo!');
    }
}

const getMessagePhotoById = async (req, res) => {
    try {
        const messagePhoto = await db.MessagePhoto.findAll({where: {id: req.params.id}});
        if (!messagePhoto) {
            res.status(404).send('Message photo not found!');
        }
        res.status(200).send('Listed by message photo ID: ' + messagePhoto);
    } catch (err) {
        console.log(err);
        res.status(500).send('Error getting message photo!');
    }
}

const messagePhotoCreate = async (req, res) => {
    try {
        const messagePhoto = await db.MessagePhoto.create(req.body);
        res.status(201).send('Message photo created: ' + messagePhoto);
    } catch (err) {
        console.log(err);
        res.status(500).send('Error creating message photo!');
    }
}

const messagePhotoUpdate = async (req, res) => {
    try {
        const messagePhoto = await db.MessagePhoto.update(req.body, {where: {id: req.params.id}});
        if (!messagePhoto) {
            res.status(404).send('Message photo not found!');
        }
        res.status(200).send('Message photo updated: ' + messagePhoto);
    } catch (err) {
        console.log(err);
        res.status(500).send('Error updating message photo!');
    }
}

const messagePhotoDelete = async (req, res) => {
    try {
        const messagePhoto = await db.MessagePhoto.destroy({where: {id: req.params.id}});
        if (!messagePhoto) {
            res.status(404).send('Message photo not found!');
        }
        res.status(204).send('Message photo deleted: ' + messagePhoto);
    } catch (err) {
        console.log(err);
        res.status(500).send('Error deleting message photo!');
    }
}

module.exports = {
    getAllMessagePhotos: errorWrapper(getAllMessagePhotos),
    getMessagePhotoById: errorWrapper(getMessagePhotoById),
    getMessagePhotoByPhotoUrl: errorWrapper(getMessagePhotoByPhotoUrl),
    messagePhotoCreate: errorWrapper(messagePhotoCreate),
    messagePhotoUpdate: errorWrapper(messagePhotoUpdate),
    messagePhotoDelete: errorWrapper(messagePhotoDelete)
}