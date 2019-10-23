const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const member = new Schema ({
    dateCreated: {type: Date, default:Date.now},
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    phoneNumber: {type: Number, min: 1000000000, max: 9999999999},
    address: {type: String, required: true},
    city: {type: String, required: true},
    state: {type: String, required: true},
    zip: {type: String, required: true},
    email: {type: String, required: true},
    basic: String,
    silver: String,
    premium: String,
    startDate: Date,
    notes: String
});

module.exports = mongoose.model('member', member);