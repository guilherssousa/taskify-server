const { model, Schema } = require('mongoose');

const GroupSchema = new Schema({
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    name: {
        type: String,
        required: true,
        minlength: 3,
    },
    bussiness: {
        type: Boolean,
        default: false,
    },
    members: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],
    routines: [{
        name: {
            type: String,
            required: true,
            minlength: true,
        },
        day: {
            type: String,
            required: true,
        }
    }],
    shoplist: [{
        name: String,
        price: Number
    }],
    code: {
        type: String,
        required: true
    }
});

module.exports = model('Group', GroupSchema);
