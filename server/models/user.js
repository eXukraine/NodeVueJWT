const mongoose = require('mongoose');

const user = mongoose.Schema({
   _id: mongoose.Schema.Types.ObjectId,
   email: {
      type: String,
      required: true
   },
   password: {
      type: String,
      required: true
   },
   userData: [{
      time: {
         type: Date,
         default: Date.now()
      },
      item: {
         type: String,
      }
   }]
});

module.exports = mongoose.model('User', user);