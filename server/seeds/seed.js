const db = require('../config/connection');
const { Locations } = require('../models');

const locationData = require('./locationData.json');

db.once('open', async () => {
  await Locations.deleteMany({});

  const locations = await Locations.insertMany(locationData);
  const users = await Users.insertMany(userData)

  console.log('Users & Surf Locations Seeded!');
  process.exit(0);
});


