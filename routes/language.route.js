const express = require('express');
const router = express.Router();
const {
    languageUpdate,
    languageDelete,
    languageCreate,
    getLanguageByLevel,
    getLanguageById,
    getAllLanguages
} = require('../controllers/language.controller.js');

router.get('get-all', getAllLanguages);
router.get('/get-by-id/:id', getLanguageById);
router.get('/get-by-level/:level', getLanguageByLevel);
router.post('/create', languageCreate);
router.put('/update/:id', languageUpdate);
router.delete('/delete/:id', languageDelete);

module.exports = router;