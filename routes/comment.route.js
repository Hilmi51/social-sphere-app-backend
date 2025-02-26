const express = require('express');
const router = express.Router();
const {
    getAllComments,
    getCommentById,
    getCommentByCreateDate,
    getCommentsByPostId,
    commentCreate,
    commentUpdate,
    commentDelete
} = require('../controllers/comment.controller');

router.get('/get-all', getAllComments);
router.get('/get-by-id/:id', getCommentById);
router.get('/get-by-create-date/:create_date', getCommentByCreateDate);
router.get('/get-by-post-id/:post_id', getCommentsByPostId);
router.post('/create', commentCreate);
router.put('/update/:id', commentUpdate);
router.delete('/delete/:id', commentDelete);

module.exports = router;