const db = require("../models/index.js");

const getAllPostLikes = async (req, res) => {
    try {
        const postLikes = await db["PostLike"].findAll();
        if (!postLikes) {
            res.status(404).send('Post likes not found!');
        }
        res.status(200).send(postLikes);
    } catch (err) {
        console.log(err);
        res.status(500).send('Error getting post likes!');
    }
}

const getPostLikeById = async (req, res) => {
    try {
        const postLike = await db["PostLike"].findAll({where: {id: req.params.id}});
        if (!postLike) {
            res.status(404).send('Post like not found!');
        }
        res.status(200).send(postLike);
    } catch (err) {
        console.log(err);
        res.status(500).send('Error getting post like!');
    }
}

const getPostLikeByLikeDate = async (req, res) => {
    try {
        const postLike = await db["PostLike"].findAll({where: {like_date: req.params.like_date}});
        if (!postLike) {
            res.status(404).send('Post like not found!');
        }
        res.status(200).send(postLike);
    } catch (err) {
        console.log(err);
        res.status(500).send('Error getting post like!');
    }
}

const getPostLikesByPostId = async (req, res) => {
    try {
        const postLikes = await db["PostLike"].findAll({where: {post_id: req.params.post_id}});
        if (!postLikes) {
            res.status(404).send('Post likes not found!');
        }
        res.status(200).send(postLikes);
    } catch (err) {
        console.log(err);
        res.status(500).send('Error getting post likes!');
    }
}

const postLikeCreate = async (req, res) => {
    try {
        const postLike = await db["PostLike"].create(req.body);
        if (!postLike) {
            res.status(404).send('Post like not created!');
        }
        res.status(201).send('Post like created!');
    } catch (err) {
        console.log(err);
        res.status(500).send('Error creating post like!');
    }
}

const postLikeUpdate = async (req, res) => {
    try {
        const postLike = await db["PostLike"].update(req.body, {where: {id: req.params.id}});
        if (!postLike) {
            res.status(404).send('Post like not found!');
        }
        res.status(200).send('Post like updated!');
    } catch (err) {
        console.log(err);
        res.status(500).send('Error updating post like!');
    }
}

const postLikeDelete = async (req, res) => {
    try {
        const postLike = await db["PostLike"].destroy({where: {id: req.params.id}});
        if (!postLike) {
            res.status(404).send('Post like not found!');
        }
        res.status(200).send('Post like deleted!');
    } catch (err) {
        console.log(err);
        res.status(500).send('Error deleting post like!');
    }
}

module.exports = {
    getAllPostLikes,
    getPostLikeById,
    getPostLikeByLikeDate,
    getPostLikesByPostId,
    postLikeCreate,
    postLikeUpdate,
    postLikeDelete
}