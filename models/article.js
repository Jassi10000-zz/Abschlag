const mongoose = require('mongoose');
const articleSchema = new mongoose.Schema({
    title: {
        required: true,
        type: String   
    },
    desc: {
        required: true,
        type: String
    },
    markdown: {
        required: true,
        type: String
    },
    date: {
        default: Date.now,
        type: Date
    }
})

module.exports = mongoose.model("Article" , articleSchema);