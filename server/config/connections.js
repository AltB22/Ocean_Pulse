const mongoose = require("mongoose");

mongoose.connect(
    //will need to check techmatchup and change it
	process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/oceanPulse",
	{
        //may need ot change some of this code
		useNewUrlParser: true,
		useUnifiedTopology: true,
	}
);

module.exports = mongoose.connection;
