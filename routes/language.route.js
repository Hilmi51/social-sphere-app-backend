const express = require('express');
const router = express.Router();
const {
    getAllLanguages,
    getLanguageById,
    getLanguageByLevel,
    getLanguageByName,
    languageCreate,
    languageDelete,
    languageUpdate
} = require('../controllers/language.controller.js');

router.get('/getAllLanguages', getAllLanguages);
router.get('/getLanguageById/:id', getLanguageById);
router.get('/getLanguageByLevel/:level', getLanguageByLevel);
router.get('/getLanguageByName/:name', getLanguageByName);
router.post('/languageCreate', languageCreate);
router.put('/languageUpdate/:id', languageUpdate);
router.delete('/languageDelete/:id', languageDelete);

module.exports = router;