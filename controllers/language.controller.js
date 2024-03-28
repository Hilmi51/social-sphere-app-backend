const db = require("../models/index.js");
const errorWrapper = require("../helpers/error/errorWrapper.js");

const getAllLanguages = async (req, res, next) => {
    try {
        const languages = await db.Language.findAll();
        if (!languages) {
            res.status(404).send('Languages not found!');
        }
        res.status(200).send(languages);
    } catch (err) {
        console.log(err);
        res.status(500).send('Error getting languages!');
    }
}

const getLanguageById = async (req, res, next) => {
    try {
        const language = await db.Language.findAll({where: {id: req.params.id}});
        if (!language) {
            res.status(404).send('Language not found!');
        }
        res.status(200).send(language);
    } catch (err) {
        console.log(err);
        res.status(500).send('Error getting language!');
    }
}

const getLanguageByName = async (req, res, next) => {
    try {
        const language = await db.Language.findAll({where: {name: req.params.name}});
        if (!language) {
            res.status(404).send('Language not found!');
        }
        res.status(200).send(language);
    } catch (err) {
        console.log(err);
        res.status(500).send('Error getting language!');
    }
}

const getLanguageByLevel = async (req, res, next) => {
    try {
        const language = await db.Language.findAll({where: {level: req.params.level}});
        if (!language) {
            res.status(404).send('Language not found!');
        }
        res.status(200).send(language);
    } catch (err) {
        console.log(err);
        res.status(500).send('Error getting language!');
    }
}

const languageCreate = async (req, res, next) => {
    try {
        const language = await db.Language.create(req.body);
        res.status(201).send(language);
    } catch (err) {
        console.log(err);
        res.status(500).send('Error creating language!');
    }
}

const languageUpdate = async (req, res, next) => {
    try {
        const language = await db.Language.update(req.body, {where: {id: req.params.id}});
        if (!language) {
            res.status(404).send('Language not found!');
        }
        res.status(200).send(language);
    } catch (err) {
        console.log(err);
        res.status(500).send('Error updating language!');
    }
}

const languageDelete = async (req, res, next) => {
    try {
        const language = await db.Language.destroy({where: {id: req.params.id}});
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
    getAllLanguages: errorWrapper(getAllLanguages),
    getLanguageById: errorWrapper(getLanguageById),
    getLanguageByName: errorWrapper(getLanguageByName),
    getLanguageByLevel: errorWrapper(getLanguageByLevel),
    languageCreate: errorWrapper(languageCreate),
    languageUpdate: errorWrapper(languageUpdate),
    languageDelete: errorWrapper(languageDelete)
}