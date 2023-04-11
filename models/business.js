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
        type: Int, 
        required: true
    },
    services: {
        type: String, 
        required: true
    },
    // photos: [{
    //     type: Schema.Types.ObjectId,
    //     ref: 'Photo',
    //     required: true
    // }]
  }, {
  });

module.exports = mongoose.model('Business', businessSchema);