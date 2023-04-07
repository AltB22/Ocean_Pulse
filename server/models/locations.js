const { Schema, model } = require('mongoose');

const locationSchema = new Schema({
  surf_spot: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  optimal_swell_direction: {
    type: Number,
    default: 0,
  },
  optimal_wind: {
    type: Number,
    default: 0,
  },
  optimal_swell_size: {
    type: Number,
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

const Locations = model('Locations', locationSchema);

module.exports = Locations;
