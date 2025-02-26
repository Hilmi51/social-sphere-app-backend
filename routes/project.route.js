const express = require('express');
const router = express.Router();
const {
    getAllProjects,
    getProjectById,
    getProjectByCode,
    getProjectByStartedDate,
    getProjectByFinishedDate,
    getProjectByStatus,
    getProjectByCategoryId,
    getProjectByUsedTechnologyId,
    projectCreate,
    projectUpdate,
    projectDelete
} = require('../controllers/project.controller.js');

router.get('/get-all', getAllProjects);
router.get('/get-by-id/:id', getProjectById);
router.get('/get-by-code/:code', getProjectByCode);
router.get('/get-by-start-date/:started_date', getProjectByStartedDate);
router.get('/get-by-finish-date/:finished_date', getProjectByFinishedDate);
router.get('/get-by-status/:status', getProjectByStatus);
router.get('/get-by-category-id/:category_id', getProjectByCategoryId);
router.get('/get-by-used-technology-id/:used_technology_id', getProjectByUsedTechnologyId)
router.post('/create', projectCreate);
router.put('/update/:id', projectUpdate);
router.delete('/delete/:id', projectDelete);

module.exports = router;