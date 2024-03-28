const db = require("../models/index.js");
const errorWrapper = require("../helpers/error/errorWrapper.js");

const getAllPosts = async (req, res) => {
    try {
        const posts = await db.Post.findAll();
        if (!posts) {
            res.status(404).send('Post not found!');
        }
        res.status(200).send('Listed by all post: ' + posts);
    } catch (err) {
        console.log(err);
        res.status(500).send('Error getting posts!');
    }
}

const getPostById = async (req, res) => {
    try {
        const post = await db.Post.findAll({where: {id: req.params.id}});
        if (!post) {
            res.status(404).send('Post not found!');
        }
        res.status(200).send('Listed by post ID: ' + post);
    } catch (err) {
        console.log(err);
        res.status(500).send('Error getting post!');
    }
}

const getPostByCreateDate = async (req, res) => {
    try {
        const post = await db.Post.findAll({where: {create_date: req.params.create_date}});
        if (!post) {
            res.status(404).send('Post not found!');
        }
        res.status(200).send('Listed by post create date: ' + post);
    } catch (err) {
        console.log(err);
        res.status(500).send('Error getting post!');
    }
}

const getPostByIsActive = async (req, res) => {
    try {
        const post = await db.Post.findAll({where: {is_active: req.params.is_active}});
        if (!post) {
            res.status(404).send('Post not found!');
        }
        res.status(200).send('Listed by post is active: ' + post);
    } catch (err) {
        console.log(err);
        res.status(500).send('Error getting post!');
    }
}

const getPostByPostPhotoId = async (req, res) => {
    try {
        const post = await db.Post.findAll({where: {post_photo_id: req.params.post_photo_id}});
        if (!post) {
            res.status(404).send('Post not found!');
        }
        res.status(200).send('Listed by post post photo ID: ' + post);
    } catch (err) {
        console.log(err);
        res.status(500).send('Error getting post!');
    }
}

const postCreate = async (req, res) => {
    try {
        const post = await db.Post.create(req.body);
        res.status(201).send('Post created: ' + post);
    } catch (err) {
        console.log(err);
        res.status(500).send('Error creating post!');
    }
}

const postUpdate = async (req, res) => {
    try {
        const post = await db.Post.update(req.body, {where: {id: req.params.id}});
        if (!post) {
            res.status(404).send('Post not found!');
        }
        res.status(200).send('Post updated: ' + post);
    } catch (err) {
        console.log(err);
        res.status(500).send('Error updating post!');
    }
}

const postDelete = async (req, res) => {
    try {
        const post = await db.Post.destroy({where: {id: req.params.id}});
        if (!post) {
            res.status(404).send('Post not found!');
        }
        res.status(200).send('Post deleted: ' + post);
    } catch (err) {
        console.log(err);
        res.status(500).send('Error deleting post!');
    }
}

module.exports = {
    getAllPosts: errorWrapper(getAllPosts),
    getPostById: errorWrapper(getPostById),
    getPostByCreateDate: errorWrapper(getPostByCreateDate),
    getPostByIsActive: errorWrapper(getPostByIsActive),
    getPostByPostPhotoId: errorWrapper(getPostByPostPhotoId),
    postCreate: errorWrapper(postCreate),
    postUpdate: errorWrapper(postUpdate),
    postDelete: errorWrapper(postDelete)
}