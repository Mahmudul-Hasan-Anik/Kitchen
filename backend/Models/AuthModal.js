const mongoose = require('mongoose');

const AuthSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email:{
        type: String,
        require: true,
        unique: true
    },
    password:{
        type: String,
        require: true
    }
})

const Authantication = mongoose.model('auth', AuthSchema)
module.exports = Authantication