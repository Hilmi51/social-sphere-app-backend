const express = require('express');
const router = express.Router();
const {
    getAllPostLikes,
    getPostLikeById,
    getPostLikesByLiked,
    getPostLikesByLikeDate,
    getPostLikesByPostId,
    postLikeCreate,
    postLikeUpdate,
    postLikeDelete
} = require("../controllers/post_like.controller");

router.get('/get-all', getAllPostLikes);
router.get('/get-by-id/:id', getPostLikeById);
router.get('/get-by-liked/:liked', getPostLikesByLiked);
router.get('/get-by-like-date/:like_date', getPostLikesByLikeDate);
router.get('/get-by-post-id/:id', getPostLikesByPostId);
router.post('/create', postLikeCreate);
router.put('/update/:id', postLikeUpdate);
router.delete('/delete/:id', postLikeDelete);

module.exports = router;