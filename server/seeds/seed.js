const db = require('../config/connection');
const { Locations } = require('../models');

const locationData = require('./locationData.json');

db.once('open', async () => {
  await Locations.deleteMany({});

  const locations = await Locations.insertMany(locationData);

  console.log('Surf Locations Seeded!');
  process.exit(0);
});


const lat = 58.7984;
const lng = 17.8081;
const params = 'windSpeed';

fetch(`https://api.stormglass.io/v2/weather/point?lat=${lat}&lng=${lng}&params=${params}`, {
  headers: {
    'Authorization': 'example-api-key'
  }
}).then((response) => response.json()).then((jsonData) => {
  // Do something with response data.
});