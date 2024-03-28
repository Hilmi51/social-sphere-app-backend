const express = require('express');
const router = express.Router();
const {
    getAllProjectCategories,
    getProjectCategoryById,
    projectCategoryCreate,
    projectCategoryDelete,
    projectCategoryUpdate
} = require('../controllers/project_category.controller.js');

router.get('/get-all', getAllProjectCategories);
router.get('/get-by-id/:id', getProjectCategoryById);
router.post('/create', projectCategoryCreate);
router.put('/update/:id', projectCategoryUpdate);
router.delete('/delete/:id', projectCategoryDelete);

module.exports = router;