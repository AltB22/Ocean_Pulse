const express = require('express');//imports express package
const app = express();//creates instance of express application
const cors = require("cors");//allows for cross origin resource sharing
const path = require('path');//Node utility for working with file/dir paths ie. ..//client/build below.
require('dotenv').config();
//loads env variables from config.env into process.env. We will need to switch to using config.env rather than separate .env file for sensitive data (I think) in order to use this specific line of code.
const PORT =  3001;//establishes port process.env.PORT ||
app.use(cors());//enables cors for the app.
const { ApolloServer } = require('apollo-server-express');//
const { authMiddleware } = require('./utils/auth');


const { typeDefs, resolvers } = require('./schemas');//imports the type definitions and resolvers for use in gql schema
const db = require('./config/connection');//imports the connection object from the config folder.  Connects to MongoDB using Mongoose.

// const routes = require('./routes');//This is not needed bc we are using graphql as an API.  GQL Schema and resolvers take the place of routes when using gql api.  I'm leaving this here for edification & comments only. -B

const server = new ApolloServer({//creates new instance of ApolloServer using typeDefs & resolvers
  typeDefs,
  resolvers,
  context: authMiddleware,
});

server.applyMiddleware({ app });

app.use(express.urlencoded({ extended: true }));//enables parsing of URL-encoded data.
app.use(express.json());//enables parsing of JSON data

// if we're in production mode (defined as NODE_ENV) serve client React app static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}


//starts the server and listens for incoming requests. Once connection established, app listens on the specified port.
db.once('open', () => {
  app.listen(PORT, () => console.log(`Now listening on localhost: ${PORT}`));
});

//Added error handling middleware for unhandled errors
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: 'Internal server error' });
});
