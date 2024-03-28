const db = require("../models/index.js");
const errorWrapper = require("../helpers/error/errorWrapper");

const getAllUsers = async (req, res) => {
    try {
        const users = await db.User.findAll();
        if (!users) {
            res.status(404).send('Users not found!');
        }
        res.status(200).send('Listed by all user: ' + users);
    } catch (err) {
        console.log(err);
        res.status(500).send('Error getting users!');
    }
}

const getByUserId = async (req, res) => {
    try {
        const user = await db.User.findAll({where: {id: req.params.id}});
        if (!user) {
            res.status(404).send('User not found!');
        }
        res.status(200).send('Listed by user ID: ' + user);
    } catch (err) {
        console.log(err);
        res.status(500).send('Error getting user!');
    }
}

const getByUserUuid = async (req, res) => {
    try {
        const user = await db.User.findAll({where: {uuid: req.params.uuid}});
        if (!user) {
            res.status(404).send('User not found!');
        }
        res.status(200).send('Listed by user UUID: ' + user);
    } catch (err) {
        console.log(err);
        res.status(500).send('Error getting user!');
    }
}

const getByUserGender = async (req, res) => {
    try {
        const user = await db.User.findAll({where: {gender: req.params.gender}});
        if (!user) {
            res.status(404).send('User not found!');
        }
        res.status(200).send('Listed by user gender: ' + user);
    } catch (err) {
        console.log(err);
        res.status(500).send('Error getting user!');
    }
}

const getByUserBirthDate = async (req, res) => {
    try {
        const user = await db.User.findAll({where: {birth_date: req.params.birth_date}});
        if (!user) {
            res.status(404).send('User not found!');
        }
        res.status(200).send('Listed by user birth date: ' + user);
    } catch (err) {
        console.log(err);
        res.status(500).send('Error getting user!');
    }
}

const getByUserIsCreateDate = async (req, res) => {
    try {
        const user = await db.User.findAll({where: {create_date: req.params.create_date}});
        if (!user) {
            res.status(404).send('User not found!');
        }
        res.status(200).send('Listed by user create date: ' + user);
    } catch (err) {
        console.log(err);
        res.status(500).send('Error getting user!');
    }
}

const getByUserIsPhoneVerification = async (req, res) => {
    try {
        const user = await db.User.findAll({where: {phone_verification: req.params.phone_verification}});
        if (!user) {
            res.status(404).send('User not found!');
        }
        res.status(200).send('Listed by user phone verification: ' + user);
    } catch (err) {
        console.log(err);
        res.status(500).send('Error getting user!');
    }
}

const getByUserIsEmailVerification = async (req, res) => {
    try {
        const user = await db.User.findAll({where: {email_verification: req.params.email_verification}});
        if (!user) {
            res.status(404).send('User not found!');
        }
        res.status(200).send('Listed by user email verification: ' + user);
    } catch (err) {
        console.log(err);
        res.status(500).send('Error getting user!');
    }
}

const getByUserIsActive = async (req, res) => {
    try {
        const user = await db.User.findAll({where: {is_active: req.params.is_active}});
        if (!user) {
            res.status(404).send('User not found!');
        }
        res.status(200).send('Listed by user active: ' + user);
    } catch (err) {
        console.log(err);
        res.status(500).send('Error getting user!');
    }
}

const getByUserRole = async (req, res) => {
    try {
        const user = await db.User.findAll({where: {role: req.params.role}});
        if (!user) {
            res.status(404).send('User not found!');
        }
        res.status(200).send('Listed by user role: ' + user);
    } catch (err) {
        console.log(err);
        res.status(500).send('Error getting user!');
    }
}

const getByUserLanguageId = async (req, res) => {
    try {
        const user = await db.User.findAll({where: {language_id: req.params.language_id}});
        if (!user) {
            res.status(404).send('User not found!');
        }
        res.status(200).send('Listed by user language ID: ' + user);
    } catch (err) {
        console.log(err);
        res.status(500).send('Error getting user!');
    }
}

const getByUserLocationId = async (req, res) => {
    try {
        const user = await db.User.findAll({where: {location_id: req.params.location_id}});
        if (!user) {
            res.status(404).send('User not found!');
        }
        res.status(200).send('Listed by user location ID: ' + user);
    } catch (err) {
        console.log(err);
        res.status(500).send('Error getting user!');
    }
}

const getByUserProjectId = async (req, res) => {
    try {
        const user = await db.User.findAll({where: {project_id: req.params.project_id}});
        if (!user) {
            res.status(404).send('User not found!');
        }
        res.status(200).send('Listed by user project ID: ' + user);
    } catch (err) {
        console.log(err);
        res.status(500).send('Error getting user!');
    }
}

const getByUserPostId = async (req, res) => {
    try {
        const user = await db.User.findAll({where: {post_id: req.params.post_id}});
        if (!user) {
            res.status(404).send('User not found!');
        }
        res.status(200).send('Listed by user post ID: ' + user);
    } catch (err) {
        console.log(err);
        res.status(500).send('Error getting user!');
    }
}

const getByUserCommentId = async (req, res) => {
    try {
        const user = await db.User.findAll({where: {comment_id: req.params.comment_id}});
        if (!user) {
            res.status(404).send('User not found!');
        }
        res.status(200).send('Listed by user comment ID: ' + user);
    } catch (err) {
        console.log(err);
        res.status(500).send('Error getting user!');
    }
}

const getByUserMessageId = async (req, res) => {
    try {
        const user = await db.User.findAll({where: {message_id: req.params.message_id}});
        if (!user) {
            res.status(404).send('User not found!');
        }
        res.status(200).send('Listed by user message ID: ' + user);
    } catch (err) {
        console.log(err);
        res.status(500).send('Error getting user!');
    }
}

const getByUserPostLikeId = async (req, res) => {
    try {
        const user = await db.User.findAll({where: {post_like_id: req.params.post_like_id}});
        if (!user) {
            res.status(404).send('User not found!');
        }
        res.status(200).send('Listed by user post like ID: ' + user);
    } catch (err) {
        console.log(err);
        res.status(500).send('Error getting user!');
    }
}

const getByUserCommentLikeId = async (req, res) => {
    try {
        const user = await db.User.findAll({where: {comment_like_id: req.params.comment_like_id}});
        if (!user) {
            res.status(404).send('User not found!');
        }
        res.status(200).send('Listed by user comment like ID: ' + user);
    } catch (err) {
        console.log(err);
        res.status(500).send('Error getting user!');
    }
}

const getByUserPostSaveId = async (req, res) => {
    try {
        const user = await db.User.findAll({where: {post_save_id: req.params.post_save_id}});
        if (!user) {
            res.status(404).send('User not found!');
        }
        res.status(200).send('Listed by user post save ID: ' + user);
    } catch (err) {
        console.log(err);
        res.status(500).send('Error getting user!');
    }
}

const userCreate = async (req, res) => {
    try {
        const user = await db.User.create(req.body);
        res.status(201).send('User created: ' + user);
    } catch (err) {
        console.log(err);
        res.status(500).send('Error creating user!');
    }
}

const userUpdate = async (req, res) => {
    try {
        const user = await db.User.update(req.body, {where: {id: req.params.id}});
        if (!user) {
            res.status(404).send('User not found!');
        }
        res.status(200).send('User updated: ' + user);
    } catch (err) {
        console.log(err);
        res.status(500).send('Error updating user!');
    }
}

const userDelete = async (req, res) => {
    try {
        const user = await db.User.destroy({where: {id: req.params.id}});
        if (!user) {
            res.status(404).send('User not found!');
        }
        res.status(204).send('User deleted: ' + user);
    } catch (err) {
        console.log(err);
        res.status(500).send('Error deleting user!');
    }
}

module.exports = {
    getAllUsers: errorWrapper(getAllUsers),
    getByUserId: errorWrapper(getByUserId),
    getByUserUuid: errorWrapper(getByUserUuid),
    getByUserGender: errorWrapper(getByUserGender),
    getByUserBirthDate: errorWrapper(getByUserBirthDate),
    getByUserIsCreateDate: errorWrapper(getByUserIsCreateDate),
    getByUserIsPhoneVerification: errorWrapper(getByUserIsPhoneVerification),
    getByUserIsEmailVerification: errorWrapper(getByUserIsEmailVerification),
    getByUserIsActive: errorWrapper(getByUserIsActive),
    getByUserRole: errorWrapper(getByUserRole),
    getByUserLanguageId: errorWrapper(getByUserLanguageId),
    getByUserLocationId: errorWrapper(getByUserLocationId),
    getByUserProjectId: errorWrapper(getByUserProjectId),
    getByUserPostId: errorWrapper(getByUserPostId),
    getByUserCommentId: errorWrapper(getByUserCommentId),
    getByUserMessageId: errorWrapper(getByUserMessageId),
    getByUserPostLikeId: errorWrapper(getByUserPostLikeId),
    getByUserCommentLikeId: errorWrapper(getByUserCommentLikeId),
    getByUserPostSaveId: errorWrapper(getByUserPostSaveId),
    userCreate: errorWrapper(userCreate),
    userUpdate: errorWrapper(userUpdate),
    userDelete: errorWrapper(userDelete)
}