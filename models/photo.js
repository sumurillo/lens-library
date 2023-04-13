const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const photoSchema = {
    url: {
      type: String,
      required: false
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    }
  }
  

module.exports = mongoose.model('Photo', photoSchema);