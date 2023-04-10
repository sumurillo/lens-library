const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const photographerSchema = new Schema({
  business: {
    type: Schema.Type.ObjectId,
    ref: 'Business',
    required: true
  }
});

const User = mongoose.model('Photographer', photographerSchema);

module.exports = User;