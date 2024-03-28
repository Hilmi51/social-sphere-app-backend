const db = require("../models/index.js");
const errorWrapper = require("../helpers/error/errorWrapper");

const getAllPostSaves = async (req, res) => {
    try {
        const postSaves = await db.PostSave.findAll();
        if (!postSaves) {
            res.status(404).send('Post saves not found!');
        }
        res.status(200).send('Listed by all post save: ' + postSaves);
    } catch (err) {
        console.log(err);
        res.status(500).send('Error getting post saves!');
    }
}

const getPostSaveById = async (req, res) => {
    try {
        const postSave = await db.PostSave.findAll({where: {id: req.params.id}});
        if (!postSave) {
            res.status(404).send('Post save not found!');
        }
        res.status(200).send('Listed by post save ID: ' + postSave);
    } catch (err) {
        console.log(err);
        res.status(500).send('Error getting post save!');
    }
}

const getPostSavedBySaved = async (req, res) => {
    try {
        const postSave = await db.PostSave.findAll({where: {saved: req.params.saved}});
        if (!postSave) {
            res.status(404).send('Post save not found!');
        }
        res.status(200).send('Listed by post save saved: ' + postSave);
    } catch (err) {
        console.log(err);
        res.status(500).send('Error getting post save!');
    }
}

const getPostSavedByPostId = async (req, res) => {
    try {
        const postSave = await db.PostSave.findAll({where: {post_id: req.params.post_id}});
        if (!postSave) {
            res.status(404).send('Post save not found!');
        }
        res.status(200).send('Listed by post save post ID: ' + postSave);
    } catch (err) {
        console.log(err);
        res.status(500).send('Error getting post save!');
    }
}

const postSaveCreate = async (req, res) => {
    try {
        const postSave = await db.PostSave.create(req.body);
        res.status(201).send('Post save created: ' + postSave);
    } catch (err) {
        console.log(err);
        res.status(500).send('Error creating post save!');
    }
}

const postSaveUpdate = async (req, res) => {
    try {
        const postSave = await db.PostSave.update(req.body, {where: {id: req.params.id}});
        if (!postSave) {
            res.status(404).send('Post save not found!');
        }
        res.status(200).send('Post save updated: ' + postSave);
    } catch (err) {
        console.log(err);
        res.status(500).send('Error updating post save!');
    }
}

const postSaveDelete = async (req, res) => {
    try {
        const postSave = await db.PostSave.destroy({where: {id: req.params.id}});
        if (!postSave) {
            res.status(404).send('Post save not found!');
        }
        res.status(200).send('Post save deleted: ' + postSave);
    } catch (err) {
        console.log(err);
        res.status(500).send('Error deleting post save!');
    }
}

module.exports = {
    getAllPostSaves: errorWrapper(getAllPostSaves),
    getPostSaveById: errorWrapper(getPostSaveById),
    getPostSavedBySaved: errorWrapper(getPostSavedBySaved),
    getPostSavedByPostId: errorWrapper(getPostSavedByPostId),
    postSaveCreate: errorWrapper(postSaveCreate),
    postSaveUpdate: errorWrapper(postSaveUpdate),
    postSaveDelete: errorWrapper(postSaveDelete)
}