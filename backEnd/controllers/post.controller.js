const PostModel = require('../models/post.model');
const UserModel = require('../models/user.model');


//function affiche les posts
module.exports.readPost = (req, res) => {
    PostModel.find((err, docs) => {
            if (!err) {
                res.send(docs);
            } else {
                console.log('Erreur dans la data :' + err)
            }
        })
        .sort({
            createdAt: -1
        }) // Permet de trier les posts les plus recents
};

//function get a post
module.exports.getAPost = async (req, res) => {
    try {
        const post = await PostModel.findById(req.params.id)
        res.status(200).json(post)
    } catch (err) {
        res.status(500).json(err)
    }
};

//function crééer un post
module.exports.createPost = async (req, res) => {
    let filename;
    if (req.file == null) {
        filename = req.body.userId + Date.now() + ".jpg";
    }
    const newPost = new PostModel({
        userId: req.body.userId,
        message: req.body.message,
        picture: req.file ? `${req.protocol}://${req.get('host')}/images/${req.file.filename}` : '',
        likers: [],
        comments: [],
    })

    try {
        const post = await newPost.save();
        return res.status(201).json(post);
    } catch (error) {
        return res.status(400).send(error)
    }
};

//function modifier son post
module.exports.updatePost = async (req, res) => {
    try {
        const post = await PostModel.findById(req.params.id);
            if (post.userId === req.body.userId) {
                await post.updateOne({
                    $set: req.body
                });
                res.status(200).json('The post has been updated')
            } else {
                res.status(403).json('You can update only your post')
            }
    } catch (err) {
        res.status(500).json(err);
    };
};

//function supprimer son post
module.exports.deletePost = async (req, res) => {
    try {
        const post = await PostModel.findById(req.params.id);
            if (post.userId === req.body.userId) {
                await post.deleteOne();
                res.status(200).json('The post has been deleted');
            } else {
                res.status(403).json('You can delete only your post');
            }
    } catch (err) {
        res.status(500).json(err);

    };
};

// function like / disliked post
module.exports.likePost = async (req, res) => {
    try {
        const post = await PostModel.findById(req.params.id);
            if (!post.likers.includes(req.body.userId)) {
                await post.updateOne({
                    $push: {likers: req.body.userId}
                });
                res.status(200).json('The post has been liked');
            } else {
                await post.updateOne({
                    $pull: {likers: req.body.userId}
                })
                res.status(200).json('The post has been disliked')
            }
    } catch (err) {
        res.status(500).json(err)
    }
};

module.exports.timelinePost = async (req, res) => {
    const postArray = [];
    try {
        const currentUser = await UserModel.findById(req.body.userId);
        const userPosts = await PostModel.find({userId: currentUser._id});
        const friendPosts = await Promise.all(currentUser.followings.map((friendId) => {
            return PostModel.find({userId: friendId})
        }));
        res.json(userPosts.concat(...friendPosts))
    } catch (err) {
        res.status(500).json(err)
    }
};


//********** * Fonction commentaires * **********//

//function commenter un post
module.exports.commentPost = async (req, res) => {
    if (!ObjectId.isValid(req.params.id)) {
        return res.status(403).send('ID inconnu : ' + req.params.id)
    }
    try {
        await PostModel.findByIdAndUpdate(
                req.params.id, {
                    $push: {
                        comments: {
                            commenterId: req.body.commenterId,
                            commenterUsername: req.body.commenterUsername,
                            text: req.body.text,
                            timestamp: new Date().getTime(),
                        },
                    },
                }, {
                    new: true
                },
            )
            .then((docs) => res.status(200).send(docs))
            .catch((error) => res.status(404).send({
                message: error
            }));
    } catch (error) {
        return res.status(403).send(error)
    }
};

//function editer un commentaire
module.exports.editComment = (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(401).send('ID inconnu : ' + req.params.id)

    try {
        return PostModel.findById(req.params.id,
            (error, post) => {
                let comment = post.comments.find((c) => c._id.equals(req.body.commentId))
                // console.log("post as" + post)
                // console.log("comment as" + comment)
                if (!post) {
                    return res.status(402).send('Commentaire non trouvé !');
                }

                comment.text = req.body.text;

                return post.save((error) => {
                    if (!error) {
                        return res.status(200).send(post)
                    } else {
                        return res.status(500).send(error)
                    }
                })
            })
    } catch (error) {
        res.status(404).send(error);
    }
};

//function supprimer un commentaire
module.exports.deleteComment = (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(403).send('ID inconnu : ' + req.params.id)

    try {
        return PostModel.findByIdAndUpdate(
            req.params.id, {
                $pull: {
                    comments: {
                        _id: req.body.commentId,
                    }
                }
            }, {
                new: true
            },
            (error, post) => {
                if (!error) {
                    return res.send(post);
                } else {
                    return res.status(400).send(error)
                }
            }
        )
    } catch (error) {
        return res.status(400).send(error)
    }
};