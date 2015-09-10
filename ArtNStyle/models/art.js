var mongoose = require('mongoose');

var artSchema = new mongoose.Schema ({
  name: {type: String, required: true},
  artist: {type: String, required: true},
  medium: [{enum: ‘chalk’, ‘watercolor’, ‘pastels’, ‘oils’}],
  yearCompleted: {type: Number, required: false},
  image: {type: String}
})

module.exports = mongoose.model('Art', bookSchema);

