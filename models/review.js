const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    business: {
        type: Schema.Types.ObjectId,
        ref: 'Business'
    },
    title: {
        type: String, 
        required: true
    },
    description: {
        type: String,
        required: true
    }
  });

module.exports = mongoose.model('Review', reviewSchema);