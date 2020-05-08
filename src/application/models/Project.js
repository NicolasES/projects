const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ProjectAnnotationSchema = new Schema({
    text: String,
    createdAt: { type: Date, default: Date.now }
})

const ProjectSchema = new Schema({
    name: String,
    description: String,
    createdAt: { type: Date, default: Date.now },
    annotations: [ProjectAnnotationSchema]
})

module.exports = mongoose.model('Project', ProjectSchema)