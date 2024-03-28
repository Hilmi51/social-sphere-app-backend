const express = require('express');
const router = express.Router();
const {
    getAllMessages,
    getMessageById,
    getMessageByBuyerId,
    getMessageByMessagePhotoId,
    getMessageBySendDate,
    getMessageByUserId,
    messageCreate,
    messageDelete,
    messageUpdate
} = require('../controllers/message.controller.js');

router.get('/getAllMessages', getAllMessages);
router.get('/getMessageById/:id', getMessageById);
router.get('/getMessageByBuyerId/:buyer_id', getMessageByBuyerId);
router.get('/getMessageByMessagePhotoId/:message_photo_id', getMessageByMessagePhotoId);
router.get('/getMessageBySendDate/:send_date', getMessageBySendDate);
router.get('/getMessageByUserId/:user_id', getMessageByUserId);
router.post('/messageCreate', messageCreate);
router.put('/messageUpdate/:id', messageUpdate);
router.delete('/messageDelete/:id', messageDelete);

module.exports = router;