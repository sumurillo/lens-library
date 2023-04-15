const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const businessSchema = new Schema({
    name: {
        type: String, 
        required: true
    },
    location: {
        type: String,
        required: true
    },
    price: {
        type: String, 
        required: true
    },
    services: {
        type: String, 
        required: true
    },
    portfolio: {
        type: String,
        required: false
    }
  });

module.exports = mongoose.model('Business', businessSchema);