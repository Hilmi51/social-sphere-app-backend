const express = require('express');
const router = express.Router();
const {
    getAllProjects,
    getProjectByCategoryId,
    getProjectByCode,
    getProjectById,
    getProjectByStatus,
    getProjectByUsedTechnologyId,
    projectCreate,
    projectUpdate,
    projectDelete
} = require('../controllers/project.controller.js');

router.get('/get-all', getAllProjects);
router.get('/get-by-id/:id', getProjectById);
router.get('/get-by-code/:code', getProjectByCode);
router.get('/get-by-category-id/:id', getProjectByCategoryId);
router.get('/get-by-status/:status', getProjectByStatus);
router.get('/get-by-used-technology-id/:id', getProjectByUsedTechnologyId);
router.post('/create', projectCreate);
router.put('/update/:id', projectUpdate);
router.delete('/delete/:id', projectDelete);

module.exports = router;