const express = require('express');
const router = express.Router();
const {
    getAllTechnologyCategories,
    getTechnologyCategoryById,
    technologyCategoryCreate,
    technologyCategoryUpdate,
    technologyCategoryDelete
} = require("../controllers/technology_category.controller");

router.get('/getAllTechnologyCategory', getAllTechnologyCategories);
router.get('/getTechnologyCategoryById/:id', getTechnologyCategoryById);
router.post('/createTechnologyCategory', technologyCategoryCreate);
router.put('/updateTechnologyCategory/:id', technologyCategoryUpdate);
router.delete('/deleteTechnologyCategory/:id', technologyCategoryDelete);

module.exports = router;