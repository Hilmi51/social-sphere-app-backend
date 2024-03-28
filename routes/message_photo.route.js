const express = require('express');
const router = express.Router();
const {
    getAllMessagePhotos,
    getMessagePhotoById,
    messagePhotoCreate,
    messagePhotoUpdate,
    messagePhotoDelete
} = require('../controllers/message_photo.controller.js');

router.get('/get-all', getAllMessagePhotos);
router.get('/get-by-id/:id', getMessagePhotoById);
router.post('/create', messagePhotoCreate);
router.put('/update/:id', messagePhotoUpdate);
router.delete('/delete/:id', messagePhotoDelete);

module.exports = router;