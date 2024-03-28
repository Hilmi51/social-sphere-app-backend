const db = require("../models/index.js");
const errorWrapper = require("../helpers/error/errorWrapper");

const getAllProjectCategories = async (req, res) => {
    try {
        const projectCategories = await db.ProjectCategory.findAll();
        if (!projectCategories) {
            res.status(404).send('Project categories not found!');
        }
        res.status(200).send('Listed by all project category: ' + projectCategories);
    } catch (err) {
        console.log(err);
        res.status(500).send('Error getting project categories!');
    }
}

const getProjectCategoryById = async (req, res) => {
    try {
        const projectCategory = await db.ProjectCategory.findAll({where: {id: req.params.id}});
        if (!projectCategory) {
            res.status(404).send('Project category not found!');
        }
        res.status(200).send('Listed by project category ID: ' + projectCategory);
    } catch (err) {
        console.log(err);
        res.status(500).send('Error getting project category!');
    }
}

const projectCategoryCreate = async (req, res) => {
    try {
        const projectCategory = await db.ProjectCategory.create(req.body);
        res.status(201).send('Project category created: ' + projectCategory);
    } catch (err) {
        console.log(err);
        res.status(500).send('Error creating project category!');
    }
}

const projectCategoryUpdate = async (req, res) => {
    try {
        const projectCategory = await db.ProjectCategory.update(req.body, {where: {id: req.params.id}});
        if (!projectCategory) {
            res.status(404).send('Project category not found!');
        }
        res.status(200).send('Project category updated: ' + projectCategory);
    } catch (err) {
        console.log(err);
        res.status(500).send('Error updating project category!');
    }
}

const projectCategoryDelete = async (req, res) => {
    try {
        const projectCategory = await db.ProjectCategory.destroy({where: {id: req.params.id}});
        if (!projectCategory) {
            res.status(404).send('Project category not found!');
        }
        res.status(204).send('Project category deleted: ' + projectCategory);
    } catch (err) {
        console.log(err);
        res.status(500).send('Error deleting project category!');
    }
}

module.exports = {
    getAllProjectCategories: errorWrapper(getAllProjectCategories),
    getProjectCategoryById: errorWrapper(getProjectCategoryById),
    projectCategoryCreate: errorWrapper(projectCategoryCreate),
    projectCategoryUpdate: errorWrapper(projectCategoryUpdate),
    projectCategoryDelete: errorWrapper(projectCategoryDelete)
}