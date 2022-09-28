const mongoose = require("mongoose")

const userModel = mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    isAdmin: {
        type: String
    },
    name: {
        type: String
    },
})