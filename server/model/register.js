const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const resgisterSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
});

resgisterSchema.plugin(uniqueValidator);
module.exports = mongoose.model('Account', resgisterSchema); 