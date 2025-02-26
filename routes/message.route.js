const express = require('express');
const router = express.Router();
const {
    getAllMessages,
    getMessageById,
    getMessageBySendDate,
    getMessageByMessagePhotoId,
    getMessageByBuyerId,
    messageCreate,
    messageUpdate,
    messageDelete
} = require('../controllers/message.controller.js');

router.get('/get-all', getAllMessages);
router.get('/get-by-id/:id', getMessageById);
router.get('/get-by-send-date/:send_date', getMessageBySendDate);
router.get('/get-by-message-photo-id/:message_photo_id', getMessageByMessagePhotoId);
router.get('/get-by-buyer-id/:buyer_id', getMessageByBuyerId);
router.post('/create', messageCreate);
router.put('/update/:id', messageUpdate);
router.delete('/delete/:id', messageDelete);

module.exports = router;