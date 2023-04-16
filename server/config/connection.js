const mongoose = require("mongoose");
require('dotenv').config({ path: __dirname+"/../../.env" });//comment in when seeding data




mongoose.connect(
	process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/ocean_pulse",

	{
		//may need to change some of this code
		useNewUrlParser: true,
		useUnifiedTopology: true,
		// useCreateIndex: true,
		// useFindAndModify: false
	}
);

module.exports = mongoose.connection;