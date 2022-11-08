const express = require('express');

const router = express.Router();

const userCtrl = require('../controllers/user.controller');

const uploadCtrl = require('../controllers/upload.controller');
const multer = require('../middelware/multer.config');


router.get('/users', userCtrl.getAllUsers);
router.get('/', userCtrl.userInfo);
router.put('/:id', userCtrl.updateUser);
router.delete('/:id', userCtrl.deleteUser);
router.put('/:id/follow', userCtrl.followUser);
router.put('/:id/unfollow', userCtrl.unFollowUser);



//multer Profil
router.post('/upload', multer, uploadCtrl.uploadImg);



module.exports = router;