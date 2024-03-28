const db = require("../models/index.js");
const errorWrapper = require("../helpers/error/errorWrapper");

const getAllPostLikes = async (req, res, next) => {
    try {
        const postLikes = await db.PostLike.findAll();
        if (!postLikes) {
            res.status(404).send('Post likes not found!');
        }
        res.status(200).send('Listed by all post like: ' + postLikes);
    } catch (err) {
        console.log(err);
        res.status(500).send('Error getting post likes!');
    }
}

const getPostLikeById = async (req, res, next) => {
    try {
        const postLike = await db.PostLike.findAll({where: {id: req.params.id}});
        if (!postLike) {
            res.status(404).send('Post like not found!');
        }
        res.status(200).send('Listed by post like ID: ' + postLike);
    } catch (err) {
        console.log(err);
        res.status(500).send('Error getting post like!');
    }
}

const getPostLikesByLikeDate = async (req, res, next) => {
    try {
        const postLikes = await db.PostLike.findAll({where: {like_date: req.params.like_date}});
        if (!postLikes) {
            res.status(404).send('Post likes not found!');
        }
        res.status(200).send('Listed by post like like date: ' + postLikes);
    } catch (err) {
        console.log(err);
        res.status(500).send('Error getting post likes!');
    }
}

const getPostLikesByLiked = async (req, res, next) => {
    try {
        const postLikes = await db.PostLike.findAll({where: {liked: req.params.liked}});
        if (!postLikes) {
            res.status(404).send('Post likes not found!');
        }
        res.status(200).send('Listed by post like liked: ' + postLikes);
    } catch (err) {
        console.log(err);
        res.status(500).send('Error getting post likes!');
    }
}

const getPostLikesByPostId = async (req, res, next) => {
    try {
        const postLikes = await db.PostLike.findAll({where: {post_id: req.params.post_id}});
        if (!postLikes) {
            res.status(404).send('Post likes not found!');
        }
        res.status(200).send('Listed by post like post ID: ' + postLikes);
    } catch (err) {
        console.log(err);
        res.status(500).send('Error getting post likes!');
    }
}

const postLikeCreate = async (req, res, next) => {
    try {
        const postLike = await db.PostLike.create(req.body);
        res.status(201).send('Post like created: ' + postLike);
    } catch (err) {
        console.log(err);
        res.status(500).send('Error creating post like!');
    }
}

const postLikeUpdate = async (req, res, next) => {
    try {
        const postLike = await db.PostLike.update(req.body, {where: {id: req.params.id}});
        if (!postLike) {
            res.status(404).send('Post like not found!');
        }
        res.status(200).send('Post like updated: ' + postLike);
    } catch (err) {
        console.log(err);
        res.status(500).send('Error updating post like!');
    }
}

const postLikeDelete = async (req, res, next) => {
    try {
        const postLike = await db.PostLike.destroy({where: {id: req.params.id}});
        if (!postLike) {
            res.status(404).send('Post like not found!');
        }
        res.status(200).send('Post like deleted: ' + postLike);
    } catch (err) {
        console.log(err);
        res.status(500).send('Error deleting post like!');
    }
}

module.exports = {
    getAllPostLikes: errorWrapper(getAllPostLikes),
    getPostLikeById: errorWrapper(getPostLikeById),
    getPostLikesByLikeDate: errorWrapper(getPostLikesByLikeDate),
    getPostLikesByLiked: errorWrapper(getPostLikesByLiked),
    getPostLikesByPostId: errorWrapper(getPostLikesByPostId),
    postLikeCreate: errorWrapper(postLikeCreate),
    postLikeUpdate: errorWrapper(postLikeUpdate),
    postLikeDelete: errorWrapper(postLikeDelete)
}