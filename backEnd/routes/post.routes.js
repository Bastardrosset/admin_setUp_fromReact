const router = require('express').Router();
const postController = require('../controllers/post.controller');


router.get('/', postController.readPost);
router.get('/profil/:username', postController.usersAllPost);
router.get('/:id', postController.getAPost);
router.get('/timeline/:userId', postController.timelinePost);
router.post('/', postController.createPost);
router.put('/:id', postController.updatePost);
router.delete('/:id', postController.deletePost);
router.put('/like-dislike-post/:id', postController.likePost);

// Commentaires
router.put('/comment-post/:id', postController.commentPost);
router.put('/edit-comment-post/:id' , postController.editComment);
router.patch('/delete-comment-post/:id', postController.deleteComment);

module.exports = router;