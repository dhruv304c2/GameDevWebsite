const mongoose = require('mongoose');
const { Schema } = mongoose;

const projectSchema = new Schema({
    title: String,
    details: String,
    thumbnailUrl : String,
    embeddedVideoUrl: String,
    githubUrl: String,
    contributions: String,
    year: Number,
    type: String,
    tools: String
})

module.exports = mongoose.model('Project',projectSchema);