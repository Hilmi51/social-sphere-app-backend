const express = require('express');
const router = express.Router();
const {
    getAllUsers,
    getByUserGender,
    getByUserId,
    getByUserBirthDate,
    getByUserCommentId,
    getByUserCommentLikeId,
    getByUserIsActive,
    getByUserIsCreateDate,
    getByUserIsEmailVerification,
    getByUserIsPhoneVerification,
    getByUserLanguageId,
    getByUserLocationId,
    getByUserMessageId,
    getByUserPostId,
    getByUserPostLikeId,
    getByUserPostSaveId,
    getByUserProjectId,
    getByUserRole,
    getByUserUuid,
    userCreate,
    userDelete,
    userUpdate
} = require("../controllers/user.controller.js");

router.get('/get-all', getAllUsers);
router.get('/get-by-id/:id', getByUserId);
router.get('/get-by-gender/:gender', getByUserGender);
router.get('/get-by-birth-date/:birth_date', getByUserBirthDate);
router.get('/get-by-comment-id/:id', getByUserCommentId);
router.get('/get-by-comment-like-id/:id', getByUserCommentLikeId);
router.get('/get-by-is-active/:is_active', getByUserIsActive);
router.get('/get-by-is-create-date/:is_create_date', getByUserIsCreateDate);
router.get('/get-by-is-email-verification/:is_email_verification', getByUserIsEmailVerification);
router.get('/get-by-is-phone-verification/:is_phone_verification', getByUserIsPhoneVerification);
router.get('/get-by-language-id/:id', getByUserLanguageId);
router.get('/get-by-location-id/:id', getByUserLocationId);
router.get('/get-by-message-id/:id', getByUserMessageId);
router.get('/get-by-post-id/:id', getByUserPostId);
router.get('/get-by-post-like-id/:id', getByUserPostLikeId);
router.get('/get-by-post-save-id/:id', getByUserPostSaveId);
router.get('/get-by-project-id/:id', getByUserProjectId);
router.get('/get-by-role/:role', getByUserRole);
router.get('/get-by-uuid/:uuid', getByUserUuid);
router.post('/create', userCreate);
router.put('/update/:id', userUpdate);
router.delete('/delete/:id', userDelete);

module.exports = router;