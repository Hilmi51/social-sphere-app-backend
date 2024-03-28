const db = require("../models/index.js");
const errorWrapper = require("../helpers/error/errorWrapper");

const getAllPhotos = async (req, res) => {
    try {
        const photos = await db.PostPhoto.findAll();
        if (!photos) {
            return res.status(404).send('Photos not found!');
        }
        res.status(200).send('Listed by all post photo: ' + photos);
    } catch (err) {
        console.log(err);
        res.status(500).send('Error getting photos!');
    }
}

const getPhotoById = async (req, res) => {
    try {
        const photo = await db.PostPhoto.findAll({where: {id: req.params.id}});
        if (!photo) {
            return res.status(404).send('Photo not found!');
        }
        res.status(200).send('Listed by post photo ID: ' + photo);
    } catch (err) {
        console.log(err);
        res.status(500).send('Error getting photo!');
    }
}

const photoCreate = async (req, res) => {
    try {
        const photo = await db.PostPhoto.create(req.body);
        res.status(201).send('Post photo created: ' + photo);
    } catch (err) {
        console.log(err);
        res.status(500).send('Error creating photo!');
    }
}

const photoUpdate = async (req, res) => {
    try {
        const photo = await db.PostPhoto.update(req.body, {where: {id: req.params.id}});
        if (!photo) {
            return res.status(404).send('Photo not found!');
        }
        res.status(200).send('Post photo updated: ' + photo);
    } catch (err) {
        console.log(err);
        res.status(500).send('Error updating photo!');
    }
}

const photoDelete = async (req, res) => {
    try {
        const photo = await db.PostPhoto.destroy({where: {id: req.params.id}});
        if (!photo) {
            return res.status(404).send('Photo not found!');
        }
        res.status(204).send('Post photo deleted: ' + photo);
    } catch (err) {
        console.log(err);
        res.status(500).send('Error deleting photo!');
    }
}

module.exports = {
    getAllPhotos: errorWrapper(getAllPhotos),
    getPhotoById: errorWrapper(getPhotoById),
    photoCreate: errorWrapper(photoCreate),
    photoUpdate: errorWrapper(photoUpdate),
    photoDelete: errorWrapper(photoDelete)
}