const mongoose = require("mongoose");

mongoose.connect(
	process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/oceanPulse",
	{
        //may need to change some of this code
		useNewUrlParser: true,
		useUnifiedTopology: true,
	}
);

module.exports = mongoose.connection;
