const express = require('express');
const router = express.Router();
const user = require('./user.route.js');
const used_technology = require('./used_technology.route.js');
const project_category = require('./project_category.route.js');
const project = require('./project.route.js');
const post_save = require('./post_save.route.js');
const post_photo = require('./post_photo.route.js');
const post_like = require('./post_like.route.js');
const comment = require('./comment.route.js');
const post = require('./post.route.js');
const message_photo = require('./message_photo.route.js');
const message = require('./message.route.js');
const location = require('./location.route.js');
const language = require('./language.route.js');
const comment_like = require('./comment_like.route.js');

router.use('/user', user);
router.use('/used-technology', used_technology);
router.use('/project-category', project_category);
router.use('/project', project);
router.use('/post-save', post_save);
router.use('/post-photo', post_photo);
router.use('/post-like', post_like);
router.use('/post', post);
router.use('/message-photo', message_photo);
router.use('/message', message);
router.use('/location', location);
router.use('/language', language);
router.use('/comment-like', comment_like);
router.use('/comment', comment);

module.exports = router;
