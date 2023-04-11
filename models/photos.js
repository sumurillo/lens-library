const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const photoSchema = {
    photos: [{
      file: Buffer,
      mimetype: String,
      photographer: { 
      type: Schema.Types.ObjectId,
      ref: 'User'
    },
      dateTaken: Date,
      dimensions: {
        width: Number,
        height: Number
      },
      fileSize: Number,
      imageFormat: String,
      required: true
    }]
  }
  

module.exports = mongoose.model('Photo', photoSchema);