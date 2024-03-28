const express = require('express');
const router = express.Router();
const {
    getAllPostComments,
    getPostCommentById,
    getPostCommentsByCreateDate,
    getPostCommentsByPostId,
    postCommentCreate,
    postCommentDelete,
    postCommentUpdate
} = require('../controllers/post_comment.controller');

router.get('/getAllPostComments', getAllPostComments);
router.get('/getPostCommentById/:id', getPostCommentById);
router.get('/getPostCommentsByCreateDate/:createDate', getPostCommentsByCreateDate);
router.get('/getPostCommentsByPostId/:postId', getPostCommentsByPostId);
router.post('/postCommentCreate', postCommentCreate);
router.put('/postCommentUpdate/:id', postCommentUpdate);
router.delete('/postCommentDelete/:id', postCommentDelete);

module.exports = router;