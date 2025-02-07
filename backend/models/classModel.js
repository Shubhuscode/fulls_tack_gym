const mongoose = require('mongoose');

const classSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  time: { type: String, required: true }, // You can change this to a Date if necessary
});

module.exports = mongoose.model('Class', classSchema);
