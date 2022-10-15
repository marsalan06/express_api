const mongoose = require('mongoose'); //import mongoose

//Create Table (schema) with fields
const PostSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

//export the module with name Posts
module.exports = mongoose.model('Posts', PostSchema)
