const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    first_name: {
        type: String,
        require: true
    },
    last_name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    // birthday: {
    //     type: Date,
    //     default: Date.now()
    // },
    birthday: {
        type: String,
        required: true
    },
    password: {
        type: String,
        require: true
    },
    about_me: {
        type: String,
        require: true
    },
    image: {
        type: String
    }
}, { timestamps: true })
mongoose.set('strictQuery', false);

module.exports = mongoose.model('user', userSchema);
