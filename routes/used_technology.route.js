const express = require('express');
const {
    getAllUsedTechnologies, usedTechnologyCreate, usedTechnologyUpdate, usedTechnologyDelete,
    getUsedTechnologyByCategoryId
} = require("../controllers/used_technology.controller");
const {getProjectByUsedTechnologyId} = require("../controllers/project.controller");
const router = express.Router();

router.get('getAllUsedTechnology', getAllUsedTechnologies);
router.get('getByUsedTechnologyId/:id', getProjectByUsedTechnologyId);
router.get('getByUsedTechnologyCategoryId/:technology_category_id', getUsedTechnologyByCategoryId);
router.post('createUsedTechnology', usedTechnologyCreate);
router.put('updateUsedTechnology/:id', usedTechnologyUpdate);
router.delete('deleteUsedTechnology/:id', usedTechnologyDelete);

module.exports = router;