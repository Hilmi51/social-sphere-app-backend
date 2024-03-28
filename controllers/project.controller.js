const db = require("../models/index.js");
const errorWrapper = require("../helpers/error/errorWrapper.js");

const getAllProjects = async (req, res) => {
    try {
        const projects = await db.Project.findAll();
        if (!projects) {
            res.status(404).send('Projects not found!');
        }
        res.status(200).send(projects);
    } catch (error) {
        console.log(error);
        res.status(500).send('Error getting projects!');
    }
}

const getProjectById = async (req, res) => {
    try {
        const project = await db.Project.findAll({where: {id: req.params.id}});
        if (!project) {
            res.status(404).send('Project not found!');
        }
        res.status(200).send(project);
    } catch (error) {
        console.log(error);
        res.status(500).send('Error getting project!');
    }
}

const getProjectByCode = async (req, res) => {
    try {
        const project = await db.Project.findAll({where: {code: req.params.code}});
        if (!project) {
            res.status(404).send('Project not found!');
        }
        res.status(200).send(project);
    } catch (error) {
        console.log(error);
        res.status(500).send('Error getting project!');
    }
}

const getProjectByStatus = async (req, res) => {
    try {
        const project = await db.Project.findAll({where: {status: req.params.status}});
        if (!project) {
            res.status(404).send('Project not found!');
        }
        res.status(200).send(project);
    } catch (error) {
        console.log(error);
        res.status(500).send('Error getting project!');
    }
}

const getProjectByCategoryId = async (req, res) => {
    try {
        const project = await db.Project.findAll({where: {category_id: req.params.category_id}});
        if (!project) {
            res.status(404).send('Project not found!');
        }
        res.status(200).send(project);
    } catch (error) {
        console.log(error);
        res.status(500).send('Error getting project!');
    }
}

const getProjectByUsedTechnologyId = async (req, res) => {
    try {
        const project = await db.Project.findAll({where: {used_technology_id: req.params.used_technology_id}});
        if (!project) {
            res.status(404).send('Project not found!');
        }
        res.status(200).send(project);
    } catch (error) {
        console.log(error);
        res.status(500).send('Error getting project!');
    }
}

const projectCreate = async (req, res) => {
    try {
        const project = await db.Project.create(req.body);
        res.status(201).send(project);
    } catch (error) {
        console.log(error);
        res.status(500).send('Error created project!');
    }
}

const projectUpdate = async (req, res) => {
    try {
        const project = await db.Project.update(req.body, {where: {id: req.params.id}});
        if (!project) {
            res.status(404).send('Project not found!');
        }
        res.status(200).send(project);
    } catch (error) {
        console.log(error);
        res.status(500).send('Error updating project!');
    }
}

const projectDelete = async (req, res) => {
    try {
        const project = await db.Project.destroy({where: {id: req.params.id}});
        if (!project) {
            res.status(404).send('Project not found!');
        }
        res.status(204).send();
    } catch (error) {
        console.log(error);
        res.status(500).send('Error deleting project!');
    }
}

module.exports = {
    getAllProjects: errorWrapper(getAllProjects),
    getProjectById: errorWrapper(getProjectById),
    getProjectByCode: errorWrapper(getProjectByCode),
    getProjectByStatus: errorWrapper(getProjectByStatus),
    getProjectByCategoryId: errorWrapper(getProjectByCategoryId),
    getProjectByUsedTechnologyId: errorWrapper(getProjectByUsedTechnologyId),
    projectCreate: errorWrapper(projectCreate),
    projectUpdate: errorWrapper(projectUpdate),
    projectDelete: errorWrapper(projectDelete)
}