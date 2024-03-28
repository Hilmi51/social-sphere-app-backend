const db = require("../models/index.js");
const errorWrapper = require("../helpers/error/errorWrapper");

const getAllPostComments = async (req, res) => {
    try {
        const postComments = await db.PostComment.findAll();
        if (!postComments) {
            res.status(404).send('Post comments not found!');
        }
        res.status(200).send('Listed by all post comment: ' + postComments);
    } catch (err) {
        console.log(err);
        res.status(500).send('Error getting post comments!');
    }
}

const getPostCommentById = async (req, res) => {
    try {
        const postComment = await db.PostComment.findAll({where: {id: req.params.id}});
        if (!postComment) {
            res.status(404).send('Post comment not found!');
        }
        res.status(200).send('Listed by post comment ID: ' + postComment);
    } catch (err) {
        console.log(err);
        res.status(500).send('Error getting post comment!');
    }
}

const getPostCommentsByCreateDate = async (req, res) => {
    try {
        const postComments = await db.PostComment.findAll({where: {create_date: req.params.create_date}});
        if (!postComments) {
            res.status(404).send('Post comments not found!');
        }
        res.status(200).send('Listed by post comment create date: ' + postComments);
    } catch (err) {
        console.log(err);
        res.status(500).send('Error getting post comments!');
    }
}

const getPostCommentsByPostId = async (req, res) => {
    try {
        const postComments = await db.PostComment.findAll({where: {post_id: req.params.post_id}});
        if (!postComments) {
            res.status(404).send('Post comments not found!');
        }
        res.status(200).send('Listed by post comment post ID: ' + postComments);
    } catch (err) {
        console.log(err);
        res.status(500).send('Error getting post comments!');
    }
}

const postCommentCreate = async (req, res) => {
    try {
        const postComment = await db.PostComment.create(req.body);
        res.status(201).send('Post comment created: ' + postComment);
    } catch (err) {
        console.log(err);
        res.status(500).send('Error creating post comment!');
    }
}

const postCommentUpdate = async (req, res) => {
    try {
        const postComment = await db.PostComment.update(req.body, {where: {id: req.params.id}});
        if (!postComment) {
            res.status(404).send('Post comment not found!');
        }
        res.status(200).send('Post comment updated: ' + postComment);
    } catch (err) {
        console.log(err);
        res.status(500).send('Error updating post comment!');
    }
}

const postCommentDelete = async (req, res) => {
    try {
        const postComment = await db.PostComment.destroy({where: {id: req.params.id}});
        if (!postComment) {
            res.status(404).send('Post comment not found!');
        }
        res.status(200).send('Post comment deleted: ' + postComment);
    } catch (err) {
        console.log(err);
        res.status(500).send('Error deleting post comment!');
    }
}

module.exports = {
    getAllPostComments: errorWrapper(getAllPostComments),
    getPostCommentById: errorWrapper(getPostCommentById),
    getPostCommentsByCreateDate: errorWrapper(getPostCommentsByCreateDate),
    getPostCommentsByPostId: errorWrapper(getPostCommentsByPostId),
    postCommentCreate: errorWrapper(postCommentCreate),
    postCommentUpdate: errorWrapper(postCommentUpdate),
    postCommentDelete: errorWrapper(postCommentDelete)
}