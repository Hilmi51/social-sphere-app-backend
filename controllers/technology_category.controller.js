const db = require("../models/index.js");
const errorWrapper = require("../helpers/error/errorWrapper");

const getAllTechnologyCategories = async (req, res) => {
    try {
        const technologyCategories = await db.TechnologyCategory.findAll();
        if (!technologyCategories) {
            res.status(404).send('Technology categories not found!');
        }
        res.status(200).send('Listed by all technology category: ' + technologyCategories);
    } catch (err) {
        console.log(err);
        res.status(500).send('Error getting technology categories!');
    }
}

const getTechnologyCategoryById = async (req, res) => {
    try {
        const technologyCategory = await db.TechnologyCategory.findAll({where: {id: req.params.id}});
        if (!technologyCategory) {
            res.status(404).send('Technology category not found!');
        }
        res.status(200).send('Listed by technology category ID: ' + technologyCategory);
    } catch (err) {
        console.log(err);
        res.status(500).send('Error getting technology category!');
    }
}

const technologyCategoryCreate = async (req, res) => {
    try {
        const technologyCategory = await db.TechnologyCategory.create(req.body);
        res.status(201).send('Technology category created: ' + technologyCategory);
    } catch (err) {
        console.log(err);
        res.status(500).send('Error creating technology category!');
    }
}

const technologyCategoryUpdate = async (req, res) => {
    try {
        const technologyCategory = await db.TechnologyCategory.update(req.body, {where: {id: req.params.id}});
        if (!technologyCategory) {
            res.status(404).send('Technology category not found!');
        }
        res.status(200).send('Technology category updated: ' + technologyCategory);
    } catch (err) {
        console.log(err);
        res.status(500).send('Error updating technology category!');
    }
}

const technologyCategoryDelete = async (req, res) => {
    try {
        const technologyCategory = await db.TechnologyCategory.destroy({where: {id: req.params.id}});
        if (!technologyCategory) {
            res.status(404).send('Technology category not found!');
        }
        res.status(204).send('Technology category deleted: ' + technologyCategory);
    } catch (err) {
        console.log(err);
        res.status(500).send('Error deleting technology category!');

    }
}

module.exports = {
    getAllTechnologyCategories: errorWrapper(getAllTechnologyCategories),
    getTechnologyCategoryById: errorWrapper(getTechnologyCategoryById),
    technologyCategoryCreate: errorWrapper(technologyCategoryCreate),
    technologyCategoryUpdate: errorWrapper(technologyCategoryUpdate),
    technologyCategoryDelete: errorWrapper(technologyCategoryDelete)
}