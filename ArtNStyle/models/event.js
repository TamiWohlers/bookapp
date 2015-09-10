var mongoose = require('mongoose');

var eventSchema = new mongoose.Schema {(
  name: {type: String, maxLength: 45, required: true},
  date: {type: date, required: true},
  location: {type: String, maxLength: 45, required: true},
  time: {type: String, maxLength: 20}
})

module.exports = mongoose.model('Event', bookSchema);