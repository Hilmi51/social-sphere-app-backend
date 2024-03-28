const express = require('express');
const router = express.Router();
const {
    getAllCommentLikes,
    getCommentLikeById,
    getCommentLikeByLikedDate,
    getCommentLikeByCommentId,
    getCommentLikeByLiked,
    commentLikeCreate,
    commentLikeUpdate,
    commentLikeDelete
} = require('../controllers/comment_like.controller.js');

router.get('/getAllCommentLikes', getAllCommentLikes);
router.get('/getCommentLikeById/:id', getCommentLikeById);
router.get('/getCommentLikeByLikedDate/:liked_date', getCommentLikeByLikedDate);
router.get('/getCommentLikeByCommentId/:comment_id', getCommentLikeByCommentId);
router.get('/getCommentLikeByLiked/:liked', getCommentLikeByLiked);
router.post('/commentLikeCreate', commentLikeCreate);
router.put('/commentLikeUpdate/:id', commentLikeUpdate);
router.delete('/commentLikeDelete/:id', commentLikeDelete);

module.exports = router;
