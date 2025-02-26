const db = require("../models/index.js");

const getAllUsedTechnologies = async (req, res) => {
    try {
        const usedTechnology = await db["UsedTechnology"].findAll();
        if (!usedTechnology) {
            res.status(404).send('Used technology not found!');
        }
        res.status(200).send(usedTechnology);
    } catch (err) {
        console.log(err);
        res.status(500).send('Error getting used technology!');
    }
}

const getUsedTechnologyById = async (req, res) => {
    try {
        const usedTechnology = await db["UsedTechnology"].findAll({where: {id: req.params.id}});
        if (!usedTechnology) {
            res.status(404).send('Used technology not found!');
        }
        res.status(200).send(usedTechnology);
    } catch (err) {
        console.log(err);
        res.status(500).send('Error getting used technology!');
    }
}

const usedTechnologyCreate = async (req, res) => {
    try {
        const usedTechnology = await db["UsedTechnology"].create(req.body);
        if (!usedTechnology) {
            res.status(404).send('Used technology not found!');
        }
        res.status(201).send('Used technology created!');
    } catch (err) {
        console.log(err);
        res.status(500).send('Error creating used technology!');
    }
}

const usedTechnologyUpdate = async (req, res) => {
    try {
        const usedTechnology = await db["UsedTechnology"].update(req.body, {where: {id: req.params.id}});
        if (usedTechnology) {
            res.status(404).send('Used technology not found!');
        }
        res.status(200).send('Used technology updated!');
    } catch (err) {
        console.log(err);
        res.status(500).send('Error updating used technology!');
    }
}

const usedTechnologyDelete = async (req, res) => {
    try {
        const usedTechnology = await db["UsedTechnology"].destroy({where: {id: req.params.id}});
        if (!usedTechnology) {
            res.status(404).send('Used technology not found!');
        }
        res.status(204).send('Used technology deleted!');
    } catch (err) {
        console.log(err);
        res.status(500).send('Error deleting used technology!');
    }
}

module.exports = {
    getAllUsedTechnologies,
    getUsedTechnologyById,
    usedTechnologyCreate,
    usedTechnologyUpdate,
    usedTechnologyDelete
}