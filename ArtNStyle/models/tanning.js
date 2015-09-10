var mongoose = require('mongoose');

var tanningSalon = new mongoose.Schema {(
  description: {type: String, maxLength: 60},
  package: {type: String}
  )}

module.exports = mongoose.model('Tanning', bookSchema);  