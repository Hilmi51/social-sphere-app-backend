const express = require('express');
const router = express.Router();
const {
    getAllPhotos,
    getPhotoById,
    photoCreate,
    photoUpdate,
    photoDelete
} = require('../controllers/post_photo.controller.js');

router.get('/get-all', getAllPhotos);
router.get('/get-by-id/:id', getPhotoById);
router.post('/create', photoCreate);
router.put('/update/:id', photoUpdate);
router.delete('/delete/:id', photoDelete);

module.exports = router;
