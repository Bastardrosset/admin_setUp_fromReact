const mongoose = require('mongoose');
const { isEmail } = require('validator'); // Bibliotheque nodeModule, fonction pour sécuriser les emails
const bcrypt = require('bcrypt'); // bibliothèque pour vous aider à hacher les mots de passe

// Schema mongo db utilisateur
const userSchema = mongoose.Schema({
        username: {
            type: String,
            required: [true, 'Veuillez saisir un username'],
            minlength: 3,
            maxlength: 55,
            unique: true,
            trim: true,
        },
        email: {
            type: String,
            required: [true, 'Veuillez saisir un email'],
            validate: [isEmail],
            unique: true,
            lowercase: true,
            trim: true,
        },
        password: {
            type: String,
            required: [true, 'Veuillez saisir un mot de passe'],
            max: 50,
            minlength: 6,
        },
        picture: {
            type: String,
            default: "../images/noAvatar.png"
        },
        coverPicture: {
            type: String,
            default: "../images/noBanner.jpg"
        },
        bio: {
            type: String,
            max: 1000,
        },
        followers: {
            type: Array,
            default: [],
        },
        followings: {
            type: Array,
            default: [],
        },
        likes: {
            type: [String],
        },
        isAdmin: {
            type: Boolean,
            default: false,
        },
        desc: {
            type: String,
            max: 50,
        },
        city: {
            type: String,
            max: 50,
        },
        from: {
            type: String,
            max: 50,
        },
        relationship: {
            type: Number,
            enum: [1,2,3],
        }
    },

    {
        timestamps: true,
    }
)


const UserModel = mongoose.model('user', userSchema)

module.exports = UserModel;