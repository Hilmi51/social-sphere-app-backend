const express = require('express');
const router = express.Router();
const {
    getAllCommentLikes,
    getCommentLikeById,
    getCommentLikeByLikeDate,
    getCommentLikeByCommentId,
    commentLikeCreate,
    commentLikeUpdate,
    commentLikeDelete
} = require('../controllers/comment_like.controller.js');

router.get('/get-all', getAllCommentLikes);
router.get('/get-by-id/:id', getCommentLikeById);
router.get('/get-by-like-date/:like_date', getCommentLikeByLikeDate);
router.get('/get-by-comment-id/:comment_id', getCommentLikeByCommentId);
router.post('/create', commentLikeCreate);
router.put('/update/:id', commentLikeUpdate);
router.delete('/delete/:id', commentLikeDelete);

module.exports = router;
