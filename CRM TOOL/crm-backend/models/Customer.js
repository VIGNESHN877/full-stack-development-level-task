const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: String,
    phone: String
}, { timestamps: true });

module.exports = mongoose.model('Customer', customerSchema);
