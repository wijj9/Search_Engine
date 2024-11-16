const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String },
    url: { type: String, required: true },
    tags: [String],
    hosting: { type: String, enum: ['GitHub', 'Vercel'], required: true },
    createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Project', projectSchema);
