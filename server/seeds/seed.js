const db = require('../config/connection');
const { Location, User } = require('../models');
const locationSeeds = require('./locationData.json')
const userSeeds = require('./userData.json')

const locationData = require('./locationData.json');

db.once('open', async () => {
  await Location.deleteMany({});
  await User.deleteMany({});
  await Location.create(locationSeeds);
  await User.create(userSeeds);

  const locations = await Location.insertMany(locationData);
  const users = await User.insertMany(userData);

  console.log('Users & Surf Locations Seeded!');
  process.exit(0);
});


