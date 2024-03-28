const express = require('express');
const router = express.Router();
const {
    messageUpdate,
    messageDelete,
    messageCreate,
    getMessageByUserId,
    getMessageBySendDate,
    getMessageByMessagePhotoId,
    getMessageByBuyerId,
    getMessageById,
    getAllMessages
} = require('../controllers/message.controller.js');

router.get('/get-all', getAllMessages);
router.get('/get-by-id/:id', getMessageById);
router.get('/get-by-user-id/:id', getMessageByUserId);
router.get('/get-by-send-date/:date', getMessageBySendDate);
router.get('/get-by-message-photo-id/:id', getMessageByMessagePhotoId);
router.get('/get-by-buyer-id/:id', getMessageByBuyerId);
router.post('/create', messageCreate);
router.put('/update/:id', messageUpdate);
router.delete('/delete/:id', messageDelete);

module.exports = router;