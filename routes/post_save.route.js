const express = require('express');
const {
    getPostSaveById, getAllPostSaves, getPostSavedBySaved, getPostSavedByPostId, postSaveCreate, postSaveUpdate,
    postSaveDelete
} = require("../controllers/post_save.controller");
const router = express.Router();

router.get('/getAllPostSave', getAllPostSaves);
router.get('/getPostSaveById/:id', getPostSaveById);
router.get('/getPostSavedBySaved/:saved', getPostSavedBySaved);
router.get('/getPostSavedByPostId/:post_id', getPostSavedByPostId);
router.post('/postSaveCreate', postSaveCreate);
router.put('/updatePostSave/:id', postSaveUpdate);
router.delete('/deletePostSave/:id', postSaveDelete);

module.exports = router;