const mongoose = require('mongoose')
const validator = require('validator')


//Create user schema
const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        trim:true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw Error('Not a valid Email!')
            }
        }
    },
    mobile: {
        type: String,
        required: true,
        unique: true,
        minlength: 10,
        maxlength:10
    },
    gender: {
        type: String,
        required:true
    },
    status: {
        type: String,
        enum: ["Active", "In-Active"],
        default:"Active"
    },
    createdAt: Date,
    updatedAt:Date
})

//Model define
const users = new mongoose.model("users", userSchema)
module.exports = users;