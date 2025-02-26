const db = require("../models/index.js");

const getAllPosts = async (req, res) => {
    try {
        const posts = await db["Post"].findAll();
        if (!posts) {
            res.status(404).send('Post not found!');
        }
        res.status(200).send(posts);
    } catch (err) {
        console.log(err);
        res.status(500).send('Error getting posts!');
    }
}

const getPostById = async (req, res) => {
    try {
        const post = await db["Post"].findAll({where: {id: req.params.id}});
        if (!post) {
            res.status(404).send('Post not found!');
        }
        res.status(200).send(post);
    } catch (err) {
        console.log(err);
        res.status(500).send('Error getting post!');
    }
}

const getPostByCreateDate = async (req, res) => {
    try {
        const post = await db["Post"].findAll({where: {create_date: req.params.create_date}});
        if (!post) {
            res.status(404).send('Post not found!');
        }
        res.status(200).send(post);
    } catch (err) {
        console.log(err);
        res.status(500).send('Error getting post!');
    }
}

const getPostByIsActive = async (req, res) => {
    try {
        const post = await db["Post"].findAll({where: {is_active: req.params.is_active}});
        if (!post) {
            res.status(404).send('Post not found!');
        }
        res.status(200).send(post);
    } catch (err) {
        console.log(err);
        res.status(500).send('Error getting post!');
    }
}

const getPostByPostPhotoId = async (req, res) => {
    try {
        const post = await db["Post"].findAll({where: {post_photo_id: req.params.post_photo_id}});
        if (!post) {
            res.status(404).send('Post not found!');
        }
        res.status(200).send(post);
    } catch (err) {
        console.log(err);
        res.status(500).send('Error getting post!');
    }
}

const postCreate = async (req, res) => {
    try {
        const post = await db["Post"].create(req.body);
        if (!post) {
            res.status(404).send('Post not created!');
        }
        res.status(201).send('Post created!');
    } catch (err) {
        console.log(err);
        res.status(500).send('Error creating post!');
    }
}

const postUpdate = async (req, res) => {
    try {
        const post = await db["Post"].update(req.body, {where: {id: req.params.id}});
        if (!post) {
            res.status(404).send('Post not found!');
        }
        res.status(200).send('Post updated!');
    } catch (err) {
        console.log(err);
        res.status(500).send('Error updating post!');
    }
}

const postDelete = async (req, res) => {
    try {
        const post = await db["Post"].destroy({where: {id: req.params.id}});
        if (!post) {
            res.status(404).send('Post not found!');
        }
        res.status(200).send('Post deleted!');
    } catch (err) {
        console.log(err);
        res.status(500).send('Error deleting post!');
    }
}

module.exports = {
    getAllPosts,
    getPostById,
    getPostByCreateDate,
    getPostByIsActive,
    getPostByPostPhotoId,
    postCreate,
    postUpdate,
    postDelete
}