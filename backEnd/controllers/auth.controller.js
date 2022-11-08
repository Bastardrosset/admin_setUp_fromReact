const User = require('../models/user.model');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const sanitize = require('express-mongo-sanitize');

require('dotenv').config({
    path: '../config/.env'
})

// Function de création de compte
module.exports.signUp = (req, res) => {
    const {
        username,
        email,
        password
    } = req.body;

    bcrypt
        .hash(req.body.password, 10)
        .then(hash => {
            const user = new User({
                username,
                email,
                password: hash,
            });
            user.save()
                .then(() => res.status(200).json({
                    message: 'user créé'
                }))
                .catch(error => res.status(400).json({
                    error
                }))
        })
        .catch(error => res.status(500).json({
            error
        }))
};

// Function d'identification a un compte
module.exports.signIn = async (req, res) => {
    const {
        email,
        password
    } = req.body;
    User.findOne({
            email: req.body.email
        })

        .then(user => {
            if (!user) {
                return res.status(404).json({
                    message: 'User not found'
                });
            }
            bcrypt.compare((req.body.password), user.password)
                .then(valid => {
                    if (!valid) {
                        return res.status(401).json({
                            message: 'Wrong password'
                        });
                    }
                    res.status(200).json({
                        user: user._id,
                        token: jwt.sign({
                                userId: user._id,
                                isAdmin: user.isAdmin,
                            },
                            process.env.RANDOM_KEY_SECRET, {
                                expiresIn: '24h'
                            }
                        )
                    });
                })
                .catch(error => res.status(500).json({
                    error
                }));
        })
        .catch(error => res.status(401).send(error));
};

// Function déconnection
module.exports.logout = (req, res) => { // maxAge passe à 1 miniseconde
    res.redirect('/profil');
};