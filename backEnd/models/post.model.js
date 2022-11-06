const mongoose = require('mongoose');


// Schema mongo db des messages possibles
const PostSchema = new mongoose.Schema({
    posterId: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        trim: true,
        maxlength: 500,
    },
    picture: {
        type: String,
        default: null,
    },
    video: {
        type: String,
    },
    likers: {
        type: [String],
        required: true,
    },
    comments: {
        type: [{
            commenterId: String,
            commenterUsername: String,
            text: String,
            timestamp: Number,
        }],
        required: true,
    },
}, {
    timestamps: true,
});

const PostModel = mongoose.model('post', PostSchema);

module.exports = PostModel;