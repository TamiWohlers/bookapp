var mongoose = require('mongoose');

var stylistSchema = new mongoose.Schema ({
  name: {type: String, required: true},
  specialization: {type: String, required: true},
  yearsOfExperience: {type: Number}, 
  image: {type: String}
)}

module.exports = mongoose.model('Stylist', bookSchema);

