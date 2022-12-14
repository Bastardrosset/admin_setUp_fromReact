const mongoose = require('mongoose');


// Schema mongo db des messages possibles
const PostSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        trim: true,
        maxlength: 500,
    },
    postPicture: {
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