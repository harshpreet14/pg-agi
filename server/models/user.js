const mongoose = require('mongoose')
const {Schema} = mongoose

const userSchema = new Schema({
    firstName: {
        type: String,
        required : true
    },
    lastName: {
        type: String,
        required : true
    },
    company : {
        type: String,
        required : true
    },
    location: {
        type: String,
        required : true
    },
    email : {
        type: String,
        unique : true
    },
    password: {
        type: String,
        required : true
    }
})

const UserModel = mongoose.model('User', userSchema)

module.exports = UserModel;