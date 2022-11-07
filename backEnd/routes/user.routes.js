const express = require('express');

const router = express.Router();

const authCtrl = require('../controllers/auth.controller');
const userCtrl = require('../controllers/user.controller');

const uploadCtrl = require('../controllers/upload.controller');
const multer = require('../middelware/multer.config');


// Route création de compte
router.post('/register', authCtrl.signUp);
// Route identification
router.post('/login', authCtrl.signIn);
// Route déconnection
router.get('/logout', authCtrl.logout);

router.get('/', userCtrl.getAllUsers);
router.get('/', userCtrl.userInfo);
router.put('/:id', userCtrl.updateUser);
router.delete('/:id', userCtrl.deleteUser);
router.put('/:id/follow', userCtrl.followUser);
router.put('/:id/unfollow', userCtrl.unFollowUser);



//multer Profil
router.post('/upload', multer, uploadCtrl.uploadImg);



module.exports = router;