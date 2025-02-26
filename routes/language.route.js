const express = require('express');
const router = express.Router();
const {
    getAllLanguages,
    getLanguageById,
    languageCreate,
    languageUpdate,
    languageDelete
} = require('../controllers/language.controller.js');

router.get('/get-all', getAllLanguages);
router.get('/get-by-id/:id', getLanguageById);
router.post('/create', languageCreate);
router.put('/update/:id', languageUpdate);
router.delete('/delete/:id', languageDelete);

module.exports = router;