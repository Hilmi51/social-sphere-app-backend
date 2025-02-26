const express = require('express');
const router = express.Router();
const {
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
} = require("../controllers/user.controller.js");

router.get('/get-all', getAllUsers);
router.get('/get-by-id/:id', getByUserId);
router.get('/get-by-uuid/:uuid', getByUserUuid);
router.get('/get-by-gender/:gender', getByUserGender);
router.get('/get-by-birth-date/:birth_date', getByUserBirthDate);
router.get('/get-by-create-date/:create_date', getByUserCreateDate);
router.get('/get-by-phone-verification/:phone_verification', getByUserPhoneVerification);
router.get('/get-by-email-verification/:email_verification', getByUserEmailVerification);
router.get('/get-by-is-active/:is_active', getByUserIsActive);
router.get('/get-by-role/:role', getByUserRole);
router.get('/get-by-language-id/:language_id', getByUserLanguageId);
router.get('/get-by-location-id/:location_id', getByUserLocationId);
router.get('/get-by-project-id/:project_id', getByUserProjectId);
router.get('/get-by-post-id/:post_id', getByUserPostId);
router.get('/get-by-comment-id/:comment_id', getByUserCommentId);
router.get('/get-by-message-id/:message_id', getByUserMessageId);
router.get('/get-by-post-like-id/:post_like_id', getByUserPostLikeId);
router.get('/get-by-comment-like-id/:comment_like_id', getByUserCommentLikeId);
router.get('/get-by-post-save-id/:post_save_id', getByUserPostSaveId);
router.post('/create', userCreate);
router.put('/update/:id', userUpdate);
router.delete('/delete/:id', userDelete);

module.exports = router;