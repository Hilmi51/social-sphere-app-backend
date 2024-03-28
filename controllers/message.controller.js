const db = require("../models/index.js");
const errorWrapper = require("../helpers/error/errorWrapper.js");

const getAllMessages = async (req, res) => {
    try {
        const messages = await db.Message.findAll();
        if (!messages) {
            res.status(404).send('Message not found!');
        }
        res.status(200).send('Listed by all message: ' + messages);
    } catch (err) {
        console.log(err);
        res.status(500).send('Error getting message!');
    }
}

const getMessageById = async (req, res) => {
    try {
        const message = await db.Message.findAll({where: {id: req.params.id}});
        if (!message) {
            res.status(404).send('Message not found!');
        }
        res.status(200).send('Listed by message ID: ' + message);
    } catch (err) {
        console.log(err);
        res.status(500).send('Error getting message!');
    }
}

const getMessageBySendDate = async (req, res) => {
    try {
        const message = await db.Message.findAll({where: {send_date: req.params.send_date}});
        if (!message) {
            res.status(404).send('Message not found!');
        }
        res.status(200).send('Listed by message send date: ' + message);
    } catch (err) {
        console.log(err);
        res.status(500).send('Error getting message!');
    }
}

const getMessageByMessagePhotoId = async (req, res) => {
    try {
        const message = await db.Message.findAll({where: {message_photo_id: req.params.message_photo_id}});
        if (!message) {
            res.status(404).send('Message not found!');
        }
        res.status(200).send('Listed by message message photo ID: ' + message);
    } catch (err) {
        console.log(err);
        res.status(500).send('Error getting message!');
    }
}

const getMessageByUserId = async (req, res) => {
    try {
        const message = await db.Message.findAll({where: {user_id: req.params.user_id}});
        if (!message) {
            res.status(404).send('Message not found!');
        }
        res.status(200).send('Listed by message user ID: ' + message);
    } catch (err) {
        console.log(err);
        res.status(500).send('Error getting message!');
    }
}

const getMessageByBuyerId = async (req, res) => {
    try {
        const message = await db.Message.findAll({where: {buyer_id: req.params.buyer_id}});
        if (!message) {
            res.status(404).send('Message not found!');
        }
        res.status(200).send('Listed by message buyer ID: ' + message);
    } catch (err) {
        console.log(err);
        res.status(500).send('Error getting message!');
    }
}

const messageCreate = async (req, res) => {
    try {
        const message = await db.Message.create(req.body);
        res.status(201).send('Message created: ' + message);
    } catch (err) {
        console.log(err);
        res.status(500).send('Error creating message!');
    }
}

const messageUpdate = async (req, res) => {
    try {
        const message = await db.Message.update(req.body, {where: {id: req.params.id}});
        if (!message) {
            res.status(404).send('Message not found!');
        }
        res.status(200).send('Message updated: ' + message);
    } catch (err) {
        console.log(err);
        res.status(500).send('Error updating message!');
    }
}

const messageDelete = async (req, res) => {
    try {
        const message = await db.Message.destroy({where: {id: req.params.id}});
        if (!message) {
            res.status(404).send('Message not found!');
        }
        res.status(204).send('Message deleted: ' + message);
    } catch (err) {
        console.log(err);
        res.status(500).send('Error deleting message!');
    }
}

module.exports = {
    getAllMessages: errorWrapper(getAllMessages),
    getMessageById: errorWrapper(getMessageById),
    getMessageBySendDate: errorWrapper(getMessageBySendDate),
    getMessageByMessagePhotoId: errorWrapper(getMessageByMessagePhotoId),
    getMessageByUserId: errorWrapper(getMessageByUserId),
    getMessageByBuyerId: errorWrapper(getMessageByBuyerId),
    messageCreate: errorWrapper(messageCreate),
    messageUpdate: errorWrapper(messageUpdate),
    messageDelete: errorWrapper(messageDelete)
}