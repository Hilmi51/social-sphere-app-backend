const express = require('express');
const router = express.Router();
const {
    getAllPosts,
    getPostById,
    getPostByCreateData,
    getPostByIsActive,
    getPostByPostPhotoId,
    postCreate,
    postUpdate,
    postDelete
} = require('../controllers/post.controller.js');

router.get('/getAllPosts', getAllPosts);
router.get('/getPostById/:id', getPostById);
router.get('/getPostByCreateData/:create_date', getPostByCreateData);
router.get('/getPostByIsActive/:is_active', getPostByIsActive);
router.get('/getPostByPostPhotoId/:post_photo_id', getPostByPostPhotoId);
router.post('/postCreate', postCreate);
router.put('/postUpdate/:id', postUpdate);
router.delete('/postDelete/:id', postDelete);

module.exports = router;