const mongoose = require("mongoose");
require('dotenv').config();

console.log("descriptive console log",process.env.MONGODB_URI)


mongoose.connect(
	process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/oceanPulse",
	// process.env.REACT_APP_ATLAS_URI || "mongodb://127.0.0.1:27017/oceanPulse",
	{
        //may need to change some of this code
		useNewUrlParser: true,
		useUnifiedTopology: true,
		// useCreateIndex: true,
		// useFindAndModify: false
	}
);

module.exports = mongoose.connection;
