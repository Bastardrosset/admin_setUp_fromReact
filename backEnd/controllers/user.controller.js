const User = require('../models/user.model');
const ObjectId = require('mongoose').Types.ObjectId; //ObjectId,type spécial utilisé pour les identifiants uniques
const bcrypt = require('bcrypt')

// Function trouve tous les utilisateurs
exports.getAllUsers = async (req, res) => {
    const users = await User.find().select('-password'); // select -password permet d'éviter de faire transiter le password
    res.status(200).json(users)
}

// Function infos utilisateur
exports.userInfo = (req, res) => {
    // console.log(req.params);
    if (!ObjectId.isValid(req.params.id)) { // Methode de verification de l'ID passé en parametres
        return res.status(400).send('ID inconnu : ' + req.params.id)
    }

    User.findById(req.params.id, (err, docs) => {
            if (!err) {
                res.send(docs)
            } else {
                console.log('ID inconnu : ' + err);
            }
        })
        .select('-password');
};

// Function mise a jour des données utilisateur
exports.updateUser = async (req, res) => {
    if (req.body.userId === req.params.id || req.user.isAmdin) {
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
    if (!ObjectId.isValid(req.params.id)) {
        return res.status(400).send('ID inconnu : ' + req.params.id);
    }
    try {
        await User.remove({
            _id: req.params.id
        }).exec();
        res.status(200).json({
            message: "Supprimé avec succès !"
        })
    } catch (err) {
        return res.status(500).json({
            message: err
        });
    };
};