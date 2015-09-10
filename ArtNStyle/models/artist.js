var mongoose = require('mongoose');

var artistSchema = new mongoose.Schema ({
  name: {type: String, required: true},
  medium: {enum: {[‘chalk’, ‘watercolor’, ‘pastels’, ‘oils’]},
  yearsOfExperience: {type: Number},
  image: {type: String}

)}

