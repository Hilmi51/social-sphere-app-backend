const express = require('express');
const {
    getAllPostLikes,
    getPostLikeById,
    getPostLikesByLiked,
    getPostLikesByLikeDate,
    getPostLikesByPostId,
    postLikeCreate,
    postLikeDelete,
    postLikeUpdate
} = require("../controllers/post_like.controller");
const router = express.Router();

router.get('/getAllPostLikes', getAllPostLikes);
router.get('/getPostLikeById/:id', getPostLikeById);
router.get('/getPostLikesByLiked/:liked', getPostLikesByLiked);
router.get('/getPostLikesByLikeDate/:likeDate', getPostLikesByLikeDate);
router.get('/getPostLikesByPostId/:postId', getPostLikesByPostId);
router.post('/postLikeCreate', postLikeCreate);
router.delete('/postLikeDelete/:id', postLikeDelete);
router.put('/postLikeUpdate/:id', postLikeUpdate);

module.exports = router;