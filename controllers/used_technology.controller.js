const db = require("../models/index.js");
const errorWrapper = require("../helpers/error/errorWrapper");

const getAllUsedTechnologies = async (req, res) => {
    try {
        const usedTechnologies = await db.UsedTechnology.findAll();
        if (!usedTechnologies) {
            res.status(404).send('Used technology not found!');
        }
        res.status(200).send('Listed by all used technology: ' + usedTechnologies);
    } catch (err) {
        console.log(err);
        res.status(500).send('Error getting used technology!');
    }
};

const getUsedTechnologyById = async (req, res) => {
    try {
        const usedTechnology = await db.UsedTechnology.findAll({where: {id: req.params.id}});
        if (!usedTechnology) {
            res.status(404).send('Used technology not found!');
        }
        res.status(200).send('Listed by used technology ID: ' + usedTechnology);
    } catch (err) {
        console.log(err);
        res.status(500).send('Error getting used technology!');
    }
}

const getUsedTechnologyByCategoryId = async (req, res) => {
    try {
        const usedTechnology = await db.UsedTechnology.findAll({where: {technology_category_id: req.params.technology_category_id}});
        if (!usedTechnology) {
            res.status(404).send('Used technology not found!');
        }
        res.status(200).send('Listed by used technology category ID: ' + usedTechnology);
    } catch (err) {
        console.log(err);
        res.status(500).send('Error getting used technology!');
    }
}

const usedTechnologyCreate = async (req, res) => {
    try {
        const usedTechnology = await db.UsedTechnology.create(req.body);
        res.status(201).send('Used technology created: ' + usedTechnology);
    } catch (err) {
        console.log(err);
        res.status(500).send('Error creating used technology!');
    }
}

const usedTechnologyUpdate = async (req, res) => {
    try {
        const usedTechnology = await db.UsedTechnology.update(req.body, {where: {id: req.params.id}});
        if (!usedTechnology) {
            res.status(404).send('Used technology not found!');
        }
        res.status(200).send('Used technology updated: ' + usedTechnology);
    } catch (err) {
        console.log(err);
        res.status(500).send('Error updating used technology!');
    }
}

const usedTechnologyDelete = async (req, res) => {
    try {
        const usedTechnology = await db.UsedTechnology.destroy({where: {id: req.params.id}});
        if (!usedTechnology) {
            res.status(404).send('Used technology not found!');
        }
        res.status(204).send('Used technology deleted: ' + usedTechnology);
    } catch (err) {
        console.log(err);
        res.status(500).send('Error deleting used technology!');
    }
}

module.exports = {
    getAllUsedTechnologies: errorWrapper(getAllUsedTechnologies),
    getUsedTechnologyById: errorWrapper(getUsedTechnologyById),
    getUsedTechnologyByCategoryId: errorWrapper(getUsedTechnologyByCategoryId),
    usedTechnologyCreate: errorWrapper(usedTechnologyCreate),
    usedTechnologyUpdate: errorWrapper(usedTechnologyUpdate),
    usedTechnologyDelete: errorWrapper(usedTechnologyDelete)
}