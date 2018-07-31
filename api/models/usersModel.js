'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var UserSchema = new Schema({
  name: {
    type: String,
    required: 'Kindly enter the name of the task'
  },
  email:{
      type: String,
      required:'Kindly enter a valid e-mail Id'
  },
  phone:{
      type:Number,
      required:"Kindly enter correct phone number"
}, 
  Created_date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Users', UserSchema);