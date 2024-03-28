const express = require('express');
const router = express.Router();
const {
    getAllTechnologyCategories,
    getTechnologyCategoryById,
    technologyCategoryCreate,
    technologyCategoryDelete,
    technologyCategoryUpdate
} = require("../controllers/technology_category.controller.js");

router.get('/get-all', getAllTechnologyCategories);
router.get('/get-by-id/:id', getTechnologyCategoryById);
router.post('/create', technologyCategoryCreate);
router.put('/update/:id', technologyCategoryUpdate);
router.delete('/delete/:id', technologyCategoryDelete);

module.exports = router;