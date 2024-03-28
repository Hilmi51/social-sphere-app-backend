const express = require('express');
const router = express.Router();
const {
    getALlPostPhotos,
    getPhotoById,
    photoCreate,
    photoUpdate,
    photoDelete
} = require('../controllers/post_photo.controller.js');

router.get('/getAllPostPhotos', getALlPostPhotos);
router.get('/getPhotoById/:id', getPhotoById);
router.post('/photoCreate', photoCreate);
router.put('/photoUpdate/:id', photoUpdate);
router.delete('/photoDelete/:id', photoDelete);

module.exports = router;
