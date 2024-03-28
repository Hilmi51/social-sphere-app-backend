const express = require('express');
const router = express.Router();
const {
    commentLikeDelete,
    commentLikeUpdate,
    commentLikeCreate,
    getCommentLikeByLiked,
    getCommentLikeByCommentId,
    getCommentLikeByLikedDate,
    getCommentLikeById,
    getAllCommentLikes
} = require('../controllers/comment_like.controller.js');

router.get('/get-all', getAllCommentLikes);
router.get('/get-by-id/:id', getCommentLikeById);
router.get('/get-by-liked/:liked', getCommentLikeByLiked);
router.get('/get-by-comment-id/:id', getCommentLikeByCommentId);
router.get('/get-by-liked-date/:liked_date', getCommentLikeByLikedDate);
router.post('/create', commentLikeCreate);
router.put('/update/:id', commentLikeUpdate);
router.delete('/delete/:id', commentLikeDelete);

module.exports = router;
