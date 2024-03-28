const db = require("../models/index.js");
const errorWrapper = require("../helpers/error/errorWrapper.js");

const getAllCommentLikes = async (req, res, next) => {
    try {
        const commentLikes = await db.CommentLike.findAll();
        if (!commentLikes) {
            res.status(404).send('Comment likes not found!');
        }
        res.status(200).send('Listed by all comment like: ' + commentLikes);
    } catch (err) {
        console.log(err);
        res.status(500).send('Error getting comment likes!');
    }
}

const getCommentLikeById = async (req, res, next) => {
    try {
        const commentLike = await db.CommentLike.findAll({where: {id: req.params.id}});
        if (!commentLike) {
            res.status(404).send('Comment like not found!');
        }
        res.status(200).send('Listed by comment like ID: ' + commentLike);
    } catch (err) {
        console.log(err);
        res.status(500).send('Error getting comment like!');
    }
}

const getCommentLikeByLikedDate = async (req, res, next) => {
    try {
        const commentLike = await db.CommentLike.findAll({where: {liked_date: req.params.liked_date}});
        if (!commentLike) {
            res.status(404).send('Comment like not found!');
        }
        res.status(200).send('Listed by comment like like date: ' + commentLike);
    } catch (err) {
        console.log(err);
        res.status(500).send('Error getting comment like!');
    }
}

const getCommentLikeByLiked = async (req, res, next) => {
    try {
        const commentLike = await db.CommentLike.findAll({where: {liked: req.params.liked}});
        if (!commentLike) {
            res.status(404).send('Comment like not found!');
        }
        res.status(200).send('Listed by comment like liked: ' + commentLike);
    } catch (err) {
        console.log(err);
        res.status(500).send('Error getting comment like!');
    }
}

const getCommentLikeByCommentId = async (req, res, next) => {
    try {
        const commentLike = await db.CommentLike.findAll({where: {comment_id: req.params.comment_id}});
        if (!commentLike) {
            res.status(404).send('Comment like not found!');
        }
        res.status(200).send('Listed by comment like comment ID: ' + commentLike);
    } catch (err) {
        console.log(err);
        res.status(500).send('Error getting comment like!');
    }
}

const commentLikeCreate = async (req, res, next) => {
    try {
        const commentLike = await db.CommentLike.create(req.body);
        res.status(201).send('Comment like created: ' + commentLike);
    } catch (err) {
        console.log(err);
        res.status(500).send('Error creating comment like!');
    }
}

const commentLikeUpdate = async (req, res, next) => {
    try {
        const commentLike = await db.CommentLike.update(req.body, {where: {id: req.params.id}});
        if (!commentLike) {
            res.status(404).send('Comment like not found!');
        }
        res.status(200).send('Comment like updated: ' + commentLike);
    } catch (err) {
        console.log(err);
        res.status(500).send('Error updating comment like!');
    }
}

const commentLikeDelete = async (req, res, next) => {
    try {
        const commentLike = await db.CommentLike.destroy({where: {id: req.params.id}});
        if (!commentLike) {
            res.status(404).send('Comment like not found!');
        }
        res.status(200).send('Comment like deleted: ' + commentLike);
    } catch (err) {
        console.log(err);
        res.status(500).send('Error deleting comment like!');
    }
}

module.exports = {
    getAllCommentLikes: errorWrapper(getAllCommentLikes),
    getCommentLikeById: errorWrapper(getCommentLikeById),
    getCommentLikeByLikedDate: errorWrapper(getCommentLikeByLikedDate),
    getCommentLikeByLiked: errorWrapper(getCommentLikeByLiked),
    getCommentLikeByCommentId: errorWrapper(getCommentLikeByCommentId),
    commentLikeCreate: errorWrapper(commentLikeCreate),
    commentLikeUpdate: errorWrapper(commentLikeUpdate),
    commentLikeDelete: errorWrapper(commentLikeDelete)
}