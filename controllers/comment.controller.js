const db = require("../models/index.js");

const getAllComments = async (req, res) => {
    try {
        const comments = await db["Comment"].findAll();
        if (!comments) {
            res.status(404).send('Comments not found!');
        }
        res.status(200).send(comments);
    } catch (err) {
        console.log(err);
        res.status(500).send('Error getting comments!');
    }
}

const getCommentById = async (req, res) => {
    try {
        const comment = await db["Comment"].findAll({where: {id: req.params.id}});
        if (!comment) {
            res.status(404).send('Comment not found!');
        }
        res.status(200).send(comment);
    } catch (err) {
        console.log(err);
        res.status(500).send('Error getting comment!');
    }
}

const getCommentByCreateDate = async (req, res) => {
    try {
        const comment = await db["Comment"].findAll({where: {create_date: req.params.create_date}});
        if (!comment) {
            res.status(404).send('Comment not found!');
        }
        res.status(200).send(comment);
    } catch (err) {
        console.log(err);
        res.status(500).send('Error getting comment!');
    }
}

const getCommentsByPostId = async (req, res) => {
    try {
        const comment = await db["Comment"].findAll({where: {post_id: req.params.post_id}});
        if (!comment) {
            res.status(404).send('Comments not found!');
        }
        res.status(200).send(comment);
    } catch (err) {
        console.log(err);
        res.status(500).send('Error getting comments!');
    }
}

const commentCreate = async (req, res) => {
    try {
        const comment = await db["Comment"].create(req.body);
        if (!comment) {
            res.status(404).send('Comment not created!');
        }
        res.status(201).send('Comment created!');
    } catch (err) {
        console.log(err);
        res.status(500).send('Error creating comment!');
    }
}

const commentUpdate = async (req, res) => {
    try {
        const comment = await db["Comment"].update(req.body, {where: {id: req.params.id}});
        if (!comment) {
            res.status(404).send('Comment not found!');
        }
        res.status(200).send('Comment updated!');
    } catch (err) {
        console.log(err);
        res.status(500).send('Error updating comment!');
    }
}

const commentDelete = async (req, res) => {
    try {
        const comment = await db["Comment"].destroy({where: {id: req.params.id}});
        if (!comment) {
            res.status(404).send('Comment not found!');
        }
        res.status(200).send('Comment deleted!');
    } catch (err) {
        console.log(err);
        res.status(500).send('Error deleting comment!');
    }
}

module.exports = {
    getAllComments,
    getCommentById,
    getCommentByCreateDate,
    getCommentsByPostId,
    commentCreate,
    commentUpdate,
    commentDelete
}