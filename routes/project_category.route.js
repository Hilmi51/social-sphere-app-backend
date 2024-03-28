const express = require('express');
const router = express.Router();
const {
    getAllProjectCategories,
    getProjectCategoryById,
    projectCategoryCreate,
    projectCategoryDelete,
    projectCategoryUpdate
} = require('../controllers/project_category.controller');

router.get('/getAllProjectCategory', getAllProjectCategories);
router.get('/getProjectCategoryById/:id', getProjectCategoryById);
router.post('/projectCategoryCreate', projectCategoryCreate);
router.put('/projectCategoryUpdate/:id', projectCategoryUpdate);
router.delete('/projectCategoryDelete/:id', projectCategoryDelete);

module.exports = router;