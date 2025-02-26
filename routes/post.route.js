const express = require('express');
const router = express.Router();
const {
    getAllPosts,
    getPostById,
    getPostByCreateDate,
    getPostByIsActive,
    getPostByPostPhotoId,
    postCreate,
    postUpdate,
    postDelete
} = require('../controllers/post.controller.js');

router.get('/get-all', getAllPosts);
router.get('/get-by-id/:id', getPostById);
router.get('/get-by-create-date/:create_date', getPostByCreateDate)
router.get('/get-by-is-active/:is_active', getPostByIsActive);
router.get('/get-by-post-photo-id/:post_photo_id', getPostByPostPhotoId);
router.post('/create', postCreate);
router.put('/update/:id', postUpdate);
router.delete('/delete/:id', postDelete);

module.exports = router;