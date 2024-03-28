const express = require('express');
const router = express.Router();
const {
    getAllMessagePhotos,
    getMessagePhotoById,
    getMessagePhotoByPhotoUrl,
    messagePhotoCreate,
    messagePhotoUpdate,
    messagePhotoDelete
} = require('../controllers/message_photo.controller.js');

router.get('/getAllMessagePhotos', getAllMessagePhotos);
router.get('/getMessagePhotoById/:id', getMessagePhotoById);
router.get('/getMessagePhotoByPhotoUrl/:photoUrl', getMessagePhotoByPhotoUrl);
router.post('/messagePhotoCreate', messagePhotoCreate);
router.put('/messagePhotoUpdate/:id', messagePhotoUpdate);
router.delete('/messagePhotoDelete/:id', messagePhotoDelete);

module.exports = router;