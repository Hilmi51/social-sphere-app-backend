const db = require("../models/index.js");

const getAllLanguages = async (req, res) => {
    try {
        const languages = await db["Language"].findAll();
        if (!languages) {
            res.status(404).send('Languages not found!');
        }
        res.status(200).send(languages);
    } catch (err) {
        console.log(err);
        res.status(500).send('Error getting languages!');
    }
}

const getLanguageById = async (req, res) => {
    try {
        const language = await db["Language"].findAll({where: {id: req.params.id}});
        if (!language) {
            res.status(404).send('Language not found!');
        }
        res.status(200).send(language);
    } catch (err) {
        console.log(err);
        res.status(500).send('Error getting language!');
    }
}

const languageCreate = async (req, res) => {
    try {
        const language = await db["Language"].create(req.body);
        if (!language) {
            res.status(404).send('Language not created!');
        }
        res.status(201).send('Language created!');
    } catch (err) {
        console.log(err);
        res.status(500).send('Error creating language!');
    }
}

const languageUpdate = async (req, res) => {
    try {
        const language = await db["Language"].update(req.body, {where: {id: req.params.id}});
        if (!language) {
            res.status(404).send('Language not found!');
        }
        res.status(200).send('Language updated!');
    } catch (err) {
        console.log(err);
        res.status(500).send('Error updating language!');
    }
}

const languageDelete = async (req, res) => {
    try {
        const language = await db["Language"].destroy({where: {id: req.params.id}});
        if (!language) {
            res.status(404).send('Language not found!');
        }
        res.status(200).send('Language deleted!');
    } catch (err) {
        console.log(err);
        res.status(500).send('Error deleting language!');
    }
}

module.exports = {
    getAllLanguages,
    getLanguageById,
    languageCreate,
    languageUpdate,
    languageDelete
}