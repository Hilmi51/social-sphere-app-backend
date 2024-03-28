const express = require('express');
const router = express.Router();
const {
    getAllPostComments,
    getPostCommentById,
    getPostCommentsByCreateDate,
    getPostCommentsByPostId,
    postCommentCreate,
    postCommentUpdate,
    postCommentDelete
} = require('../controllers/post_comment.controller');

router.get('/get-all', getAllPostComments);
router.get('/get-by-id/:id', getPostCommentById);
router.get('/get-by-create-date/:date', getPostCommentsByCreateDate);
router.get('/get-by-post-id/:id', getPostCommentsByPostId);
router.post('/create', postCommentCreate);
router.put('/update/:id', postCommentUpdate);
router.delete('/delete/:id', postCommentDelete);

module.exports = router;