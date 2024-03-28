const express = require('express');
const router = express.Router();
const {
    getAllProjects,
    getProjectById,
    getProjectByCode,
    getProjectByStatus,
    getProjectByCategoryId,
    getProjectByUsedTechnologyId,
    projectCreate,
    projectUpdate,
    projectDelete
} = require('../controllers/project.controller.js');

router.get('getAllProjects', getAllProjects);
router.get('getProjectById/:id', getProjectById);
router.get('getProjectByCode/:code', getProjectByCode);
router.get('getProjectByStatus/:status', getProjectByStatus);
router.get('getProjectByCategoryId/:category_id', getProjectByCategoryId);
router.get('getProjectByUsedTechnologyId/:used_technology_id', getProjectByUsedTechnologyId);
router.post('projectCreate', projectCreate);
router.put('projectUpdate/:id', projectUpdate);
router.delete('projectDelete/:id', projectDelete);

module.exports = router;