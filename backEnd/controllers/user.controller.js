const User = require('../models/user.model'); 
const bcrypt = require('bcrypt')

// Function trouve tous les utilisateurs
exports.getAllUsers = async (req, res) => {
    if (req.body.userId === req.params.id || req.body.isAdmin) {

        const users = await User.find().select('-password'); // select -password permet d'éviter de faire transiter le password
        res.status(200).json(users)
    }
}

// Function infos utilisateur
exports.userInfo = async (req, res) => {
    const userId = req.query.userId;
    const username = req.query.username;

            try {
                const user = userId
                ? await User.findById(userId)
                : await User.findOne({ username: username });
                const {password, updatedAt, ...other} = user._doc;
                res.status(200).json(other)
            
            } catch (err) {

            }
};

// Function mise a jour des données utilisateur
exports.updateUser = async (req, res) => {
    if (req.body.userId === req.params.id || req.body.isAmdin) {
        if(req.body.password){

            try {
                const salt = await bcrypt.genSalt(10);
                req.body.password = await bcrypt.hash(req.body.password, salt);
            } catch (err) {
                return res.status(500).json({
                    message: err
                });
            };
        };

        try {
            const user = await User.findByIdAndUpdate(req.params.id, {
                // BD noSql permet de seté des données qui ne sont pas obligatoires et d'ajouter une donnée selon le model' 
                $set: req.body,
            });
            res.status(200).json('Account has been updated');
        } catch (err) {
            res.status(500).json(err);
        }

    } else {
        return res.status(403).json('You can update only your account !');
    };
};    

// Function supprime l'utilisateur
exports.deleteUser = async (req, res) => {
    if (req.body.userId === req.params.id || req.body.isAdmin) {

        try {
            await User.findByIdAndDelete(req.params.id)
            res.status(200).json({
                message: "Account as been deleted !"
            })
        } catch (err) {
            return res.status(500).json({
                message: err
            });
        };
    }
};

// Function follow a user
exports.followUser = async (req, res) => {
    if (req.body.userId !== req.params.id) {

        try {
            const user = await User.findById(req.params.id);
            const currentUser = await User.findById(req.body.userId);
                if (!user.followers.includes(req.body.userId)){
                    await user.updateOne({
                        $push:{followers: req.body.userId}
                    })
                    await currentUser.updateOne({
                        $push:{followings: req.params.id}
                    })
                    res.status(200).json('user has been followed')
                } else {
                    res.status(403).json('You allready follow this user')
                }
        } catch (err) {
            res.status(500).json(err)
        }
    } else {
        res.status(403).json('You cant follow yourself')
    }
}

// Function unfollow a user
exports.unFollowUser = async (req, res) => {
    if (req.body.userId !== req.params.id) {

        try {
            const user = await User.findById(req.params.id);
            const currentUser = await User.findById(req.body.userId);
                if (user.followers.includes(req.body.userId)){
                    await user.updateOne({
                        $pull:{followers: req.body.userId}
                    })
                    await currentUser.updateOne({
                        $pull:{followings: req.params.id}
                    })
                    res.status(200).json('user has been unfollowed')
                } else {
                    res.status(403).json('You dont follow this user')
                }
        } catch (err) {
            res.status(500).json(err)
        }
    } else {
        res.status(403).json('You cant unfollow yourself')
    }
}