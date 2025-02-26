const db = require("../models/index.js");

const getAllCommentLikes = async (req, res) => {
    try {
        const commentLikes = await db["CommentLike"].findAll();
        if (!commentLikes) {
            res.status(404).send('Comment likes not found!');
        }
        res.status(200).send(commentLikes);
    } catch (err) {
        console.log(err);
        res.status(500).send('Error getting comment likes!');
    }
}

const getCommentLikeById = async (req, res) => {
    try {
        const commentLike = await db["CommentLike"].findAll({where: {id: req.params.id}});
        if (!commentLike) {
            res.status(404).send('Comment like not found!');
        }
        res.status(200).send(commentLike);
    } catch (err) {
        console.log(err);
        res.status(500).send('Error getting comment like!');
    }
}

const getCommentLikeByLikeDate = async (req, res) => {
    try {
        const commentLike = await db["CommentLike"].findAll({where: {like_date: req.params.like_date}});
        if (!commentLike) {
            res.status(404).send('Comment like not found!');
        }
        res.status(200).send(commentLike);
    } catch (err) {
        console.log(err);
        res.status(500).send('Error getting comment like!');
    }
}

const getCommentLikeByCommentId = async (req, res) => {
    try {
        const commentLike = await db["CommentLike"].findAll({where: {comment_id: req.params.comment_id}});
        if (!commentLike) {
            res.status(404).send('Comment like not found!');
        }
        res.status(200).send(commentLike);
    } catch (err) {
        console.log(err);
        res.status(500).send('Error getting comment like!');
    }
}

const commentLikeCreate = async (req, res) => {
    try {
        const commentLike = await db["CommentLike"].create(req.body);
        if (!commentLike) {
            res.status(404).send('Comment like not created!');
        }
        res.status(201).send('Comment like created!');
    } catch (err) {
        console.log(err);
        res.status(500).send('Error creating comment like!');
    }
}

const commentLikeUpdate = async (req, res) => {
    try {
        const commentLike = await db["CommentLike"].update(req.body, {where: {id: req.params.id}});
        if (!commentLike) {
            res.status(404).send('Comment like not found!');
        }
        res.status(200).send('Comment like updated!');
    } catch (err) {
        console.log(err);
        res.status(500).send('Error updating comment like!');
    }
}

const commentLikeDelete = async (req, res) => {
    try {
        const commentLike = await db["CommentLike"].destroy({where: {id: req.params.id}});
        if (!commentLike) {
            res.status(404).send('Comment like not found!');
        }
        res.status(200).send('Comment like deleted!');
    } catch (err) {
        console.log(err);
        res.status(500).send('Error deleting comment like!');
    }
}

module.exports = {
    getAllCommentLikes,
    getCommentLikeById,
    getCommentLikeByLikeDate,
    getCommentLikeByCommentId,
    commentLikeCreate,
    commentLikeUpdate,
    commentLikeDelete
}