const db = require("../models/index.js");

const getAllPostSaves = async (req, res) => {
    try {
        const postSaves = await db["PostSave"].findAll();
        if (!postSaves) {
            res.status(404).send('Post saves not found!');
        }
        res.status(200).send(postSaves);
    } catch (err) {
        console.log(err);
        res.status(500).send('Error getting post saves!');
    }
}

const getPostSaveById = async (req, res) => {
    try {
        const postSave = await db["PostSave"].findAll({where: {id: req.params.id}});
        if (!postSave) {
            res.status(404).send('Post save not found!');
        }
        res.status(200).send(postSave);
    } catch (err) {
        console.log(err);
        res.status(500).send('Error getting post save!');
    }
}

const getPostSavedByPostId = async (req, res) => {
    try {
        const postSave = await db["PostSave"].findAll({where: {post_id: req.params.post_id}});
        if (!postSave) {
            res.status(404).send('Post save not found!');
        }
        res.status(200).send(postSave);
    } catch (err) {
        console.log(err);
        res.status(500).send('Error getting post save!');
    }
}

const postSaveCreate = async (req, res) => {
    try {
        const postSave = await db["PostSave"].create(req.body);
        if (!postSave) {
            res.status(404).send('Post save not created!');
        }
        res.status(201).send('Post save created!');
    } catch (err) {
        console.log(err);
        res.status(500).send('Error creating post save!');
    }
}

const postSaveUpdate = async (req, res) => {
    try {
        const postSave = await db["PostSave"].update(req.body, {where: {id: req.params.id}});
        if (!postSave) {
            res.status(404).send('Post save not found!');
        }
        res.status(200).send('Post save updated!');
    } catch (err) {
        console.log(err);
        res.status(500).send('Error updating post save!');
    }
}

const postSaveDelete = async (req, res) => {
    try {
        const postSave = await db["PostSave"].destroy({where: {id: req.params.id}});
        if (!postSave) {
            res.status(404).send('Post save not found!');
        }
        res.status(200).send('Post save deleted!');
    } catch (err) {
        console.log(err);
        res.status(500).send('Error deleting post save!');
    }
}

module.exports = {
    getAllPostSaves,
    getPostSaveById,
    getPostSavedByPostId,
    postSaveCreate,
    postSaveUpdate,
    postSaveDelete
}