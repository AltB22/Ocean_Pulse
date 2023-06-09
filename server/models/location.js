const { Schema, model } = require('mongoose');

const locationSchema = new Schema({
  surf_spot: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  optimal_swell_direction: {
    type: String,
    default: 0,
  },
  optimal_wind: {
    type: String,
    default: 0,
  },
  optimal_swell_size: {
    type: String,
    default: 0,
  },
  optimal_tide: {
    type: String,
    default: 0,
  },
  summary: {
    type: String,
    default: 0,
  },


});

const Location = model('Location', locationSchema);

module.exports = Location;
