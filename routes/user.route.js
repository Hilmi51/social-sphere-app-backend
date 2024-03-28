const express = require('express');
const router = express.Router();
const {
    getAllUsers, getByUserId, getByUserUuid, userByGender, getByUserBirthDate, getByUserIsActive, getByUserRole,
    getByUserLanguageId, getByUserLocationId, userCreate, userUpdate, userDelete
} = require("../controllers/user.controller");

router.get('/getAllUsers', getAllUsers);
router.get('/getByUserId/:id', getByUserId);
router.get('/getByUserUuid/:uuid', getByUserUuid);
router.get('/userByGender/:gender', userByGender);
router.get('/getByUserBirthDate/:birth_date', getByUserBirthDate);
router.get('/getByUserIsActive/:is_active', getByUserIsActive);
router.get('/getByUserRole/:role', getByUserRole);
router.get('/getByUserLanguageId/:language_id', getByUserLanguageId);
router.get('/getByUserLocationId/:location_id', getByUserLocationId);
router.post('/createUser', userCreate);
router.put('/updateUser/:id', userUpdate);
router.delete('/deleteUser/:id', userDelete);

module.exports = router;