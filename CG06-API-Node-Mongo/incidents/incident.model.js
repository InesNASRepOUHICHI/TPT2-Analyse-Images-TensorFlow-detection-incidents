const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    vehiculeNumber: { type: String, required: true },
    type: { type: String, required: true },
    parking: { type: String, required: true },
    createdDate: { type: Date, default: Date.now }
});

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Incident', schema);