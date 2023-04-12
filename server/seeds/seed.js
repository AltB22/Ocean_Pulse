const db = require('../config/connection');
const { Location, User } = require('../models');
const locationSeeds = require('./locationData.json');
const userSeeds = require('./userData.json');

db.once('open', async () => {
  try {
    await Location.deleteMany({});
    console.log(await User.deleteMany({}));
    // await Location.create(locationSeeds);
    await User.create(userSeeds);
    await Location.create(locationSeeds);


    console.log('Users & Surf Locations Seeded!');
    process.exit(0);
  } catch (err) {
    throw err;
  }

});

//I don't think we need the below in db.once because of create() - Billy
// const locations = await Location.insertMany(locationData);
  // const users = await User.insertMany(userData);


