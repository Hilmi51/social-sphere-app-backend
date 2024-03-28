const express = require('express');
const router = express.Router();
const {
    getAllPosts,
    getPostByCreateDate,
    getPostById,
    getPostByIsActive,
    getPostByPostPhotoId,
    postCreate,
    postUpdate,
    postDelete
} = require('../controllers/post.controller.js');

router.get('/get-all', getAllPosts);
router.get('/get-by-create-date/:date', getPostByCreateDate);
router.get('/get-by-id/:id', getPostById);
router.get('/get-by-is-active/:isActive', getPostByIsActive);
router.get('/get-by-post-photo-id/:id', getPostByPostPhotoId);
router.post('/create', postCreate);
router.put('/update/:id', postUpdate);
router.delete('/delete/:id', postDelete);

module.exports = router;