const express = require('express');
const router = express.Router();
const {
    getAllPostSaves,
    getPostSaveById,
    getPostSavedByPostId,
    getPostSavedBySaved,
    postSaveCreate,
    postSaveUpdate,
    postSaveDelete
} = require("../controllers/post_save.controller.js");

router.get('/get-all', getAllPostSaves);
router.get('/get-by-id/:id', getPostSaveById);
router.get('/get-by-post-id/:id', getPostSavedByPostId);
router.get('/get-by-saved/:saved', getPostSavedBySaved);
router.post('/create', postSaveCreate);
router.put('/update/:id', postSaveUpdate);
router.delete('/delete/:id', postSaveDelete);

module.exports = router;