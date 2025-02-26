const express = require('express');
const router = express.Router();
const {
    getAllPostLikes,
    getPostLikeById,
    getPostLikeByLikeDate,
    getPostLikesByPostId,
    postLikeCreate,
    postLikeUpdate,
    postLikeDelete
} = require("../controllers/post_like.controller");

router.get('/get-all', getAllPostLikes);
router.get('/get-by-id/:id', getPostLikeById);
router.get('/get-by-like-date/:like_date', getPostLikeByLikeDate);
router.get('/get-by-post-id/:post_id', getPostLikesByPostId);
router.post('/create', postLikeCreate);
router.put('/update/:id', postLikeUpdate);
router.delete('/delete/:id', postLikeDelete);

module.exports = router;