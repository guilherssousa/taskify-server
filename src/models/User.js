const { model, Schema } = require('mongoose');

const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
        minlength: 3,
    },
    first_name: {
        type: String,
        required: true,
    },
    google_id: {
        type: Number,
        required: true,
    },
    photo_url: {
        type: String,
        required: true,
    },
});

module.exports = model('User', UserSchema);