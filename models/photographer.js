// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

// const photographerSchema = new Schema({
//     name: {type: String, required: true},
//     email: {
//       type: String,
//       unique: true,
//       trim: true,
//       lowercase: true,
//       required: true
//     },
//     password: {
//       type: String,
//       required: true
//     }
//   }, {
//     timestamps: true,
//     toJSON: {
//       transform: function(doc, ret) {
//         delete ret.password;
//         return ret;
//       }
//     }
//   });

//   module.exports = mongoose.model('Photographer', photographerSchema);