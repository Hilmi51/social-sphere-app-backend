const db = require("../models/index.js");

const getAllUsers = async (req, res) => {
    try {
        const users = await db["Users"].findAll();
        if (!users) {
            res.status(404).send('Users not found!');
        }
        res.status(200).send(users);
    } catch (err) {
        console.log(err);
        res.status(500).send('Error getting users!');
    }
}

const getByUserId = async (req, res) => {
    try {
        const user = await db["Users"].findAll({where: {id: req.params.id}});
        if (!user) {
            res.status(404).send('User not found!');
        }
        res.status(200).send(user);
    } catch (err) {
        console.log(err);
        res.status(500).send('Error getting user!');
    }
}

const getByUserUuid = async (req, res) => {
    try {
        const user = await db["Users"].findAll({where: {uuid: req.params.uuid}});
        if (!user) {
            res.status(404).send('User not found!');
        }
        res.status(200).send(user);
    } catch (err) {
        console.log(err);
        res.status(500).send('Error getting user!');
    }
}

const getByUserGender = async (req, res) => {
    try {
        const user = await db["Users"].findAll({where: {gender: req.params.gender}});
        if (!user) {
            res.status(404).send('User not found!');
        }
        res.status(200).send(user);
    } catch (err) {
        console.log(err);
        res.status(500).send('Error getting user!');
    }
}

const getByUserBirthDate = async (req, res) => {
    try {
        const user = await db["Users"].findAll({where: {birth_date: req.params.birth_date}});
        if (!user) {
            res.status(404).send('User not found!');
        }
        res.status(200).send(user);
    } catch (err) {
        console.log(err);
        res.status(500).send('Error getting user!');
    }
}


const getByUserCreateDate = async (req, res) => {
    try {
        const user = await db["Users"].findAll({where: {create_date: req.params.create_date}});
        if (!user) {
            res.status(404).send('User not found!');
        }
        res.status(200).send(user);
    } catch (err) {
        console.log(err);
        res.status(500).send('Error getting user!');
    }
}

const getByUserPhoneVerification = async (req, res) => {
    try {
        const user = await db["Users"].findAll({where: {phone_verification: req.params.phone_verification}});
        if (!user) {
            res.status(404).send('User not found!');
        }
        res.status(200).send(user);
    } catch (err) {
        console.log(err);
        res.status(500).send('Error getting user!');
    }
}

const getByUserEmailVerification = async (req, res) => {
    try {
        const user = await db["Users"].findAll({where: {email_verification: req.params.email_verification}});
        if (!user) {
            res.status(404).send('User not found!');
        }
        res.status(200).send(user);
    } catch (err) {
        console.log(err);
        res.status(500).send('Error getting user!');
    }
}

const getByUserIsActive = async (req, res) => {
    try {
        const user = await db["Users"].findAll({where: {is_active: req.params.is_active}});
        if (!user) {
            res.status(404).send('User not found!');
        }
        res.status(200).send(user);
    } catch (err) {
        console.log(err);
        res.status(500).send('Error getting user!');
    }
}

const getByUserRole = async (req, res) => {
    try {
        const user = await db["Users"].findAll({where: {role: req.params.role}});
        if (!user) {
            res.status(404).send('User not found!');
        }
        res.status(200).send(user);
    } catch (err) {
        console.log(err);
        res.status(500).send('Error getting user!');
    }
}

const getByUserLanguageId = async (req, res) => {
    try {
        const user = await db["Users"].findAll({where: {language_id: req.params.language_id}});
        if (!user) {
            res.status(404).send('User not found!');
        }
        res.status(200).send(user);
    } catch (err) {
        console.log(err);
        res.status(500).send('Error getting user!');
    }
}

const getByUserLocationId = async (req, res) => {
    try {
        const user = await db["Users"].findAll({where: {location_id: req.params.location_id}});
        if (!user) {
            res.status(404).send('User not found!');
        }
        res.status(200).send(user);
    } catch (err) {
        console.log(err);
        res.status(500).send('Error getting user!');
    }
}

const getByUserProjectId = async (req, res) => {
    try {
        const user = await db["Users"].findAll({where: {project_id: req.params.project_id}});
        if (!user) {
            res.status(404).send('User not found!');
        }
        res.status(200).send(user);
    } catch (err) {
        console.log(err);
        res.status(500).send('Error getting user!');
    }
}

const getByUserPostId = async (req, res) => {
    try {
        const user = await db["Users"].findAll({where: {post_id: req.params.post_id}});
        if (!user) {
            res.status(404).send('User not found!');
        }
        res.status(200).send(user);
    } catch (err) {
        console.log(err);
        res.status(500).send('Error getting user!');
    }
}

const getByUserCommentId = async (req, res) => {
    try {
        const user = await db["Users"].findAll({where: {comment_id: req.params.comment_id}});
        if (!user) {
            res.status(404).send('User not found!');
        }
        res.status(200).send(user);
    } catch (err) {
        console.log(err);
        res.status(500).send('Error getting user!');
    }
}

const getByUserMessageId = async (req, res) => {
    try {
        const user = await db["Users"].findAll({where: {message_id: req.params.message_id}});
        if (!user) {
            res.status(404).send('User not found!');
        }
        res.status(200).send(user);
    } catch (err) {
        console.log(err);
        res.status(500).send('Error getting user!');
    }
}

const getByUserPostLikeId = async (req, res) => {
    try {
        const user = await db["Users"].findAll({where: {post_like_id: req.params.post_like_id}});
        if (!user) {
            res.status(404).send('User not found!');
        }
        res.status(200).send(user);
    } catch (err) {
        console.log(err);
        res.status(500).send('Error getting user!');
    }
}

const getByUserCommentLikeId = async (req, res) => {
    try {
        const user = await db["Users"].findAll({where: {comment_like_id: req.params.comment_like_id}});
        if (!user) {
            res.status(404).send('User not found!');
        }
        res.status(200).send(user);
    } catch (err) {
        console.log(err);
        res.status(500).send('Error getting user!');
    }
}

const getByUserPostSaveId = async (req, res) => {
    try {
        const user = await db["Users"].findAll({where: {post_save_id: req.params.post_save_id}});
        if (!user) {
            res.status(404).send('User not found!');
        }
        res.status(200).send(user);
    } catch (err) {
        console.log(err);
        res.status(500).send('Error getting user!');
    }
}

const userCreate = async (req, res) => {
    try {
        const user = await db["Users"].create(req.body);
        if (!user) {
            res.status(404).send('User not created!');
        }
        res.status(201).send('User created!');
    } catch (err) {
        console.log(err);
        res.status(500).send('Error creating user!');
    }
}

const userUpdate = async (req, res) => {
    try {
        const user = await db["Users"].update(req.body, {where: {id: req.params.id}});
        if (user) {
            res.status(404).send('User not found!');
        }
        res.status(200).send('User updated!');
    } catch (err) {
        console.log(err);
        res.status(500).send('Error updating user!');
    }
}

const userDelete = async (req, res) => {
    try {
        const user = await db["Users"].destroy({where: {id: req.params.id}});
        if (!user) {
            res.status(404).send('User not found!');
        }
        res.status(204).send('User deleted!');
    } catch (err) {
        console.log(err);
        res.status(500).send('Error deleting user!');
    }
}

module.exports = {
    getAllUsers,
    getByUserId,
    getByUserUuid,
    getByUserGender,
    getByUserBirthDate,
    getByUserCreateDate,
    getByUserPhoneVerification,
    getByUserEmailVerification,
    getByUserIsActive,
    getByUserRole,
    getByUserLanguageId,
    getByUserLocationId,
    getByUserProjectId,
    getByUserPostId,
    getByUserCommentId,
    getByUserMessageId,
    getByUserPostLikeId,
    getByUserCommentLikeId,
    getByUserPostSaveId,
    userCreate,
    userUpdate,
    userDelete
}