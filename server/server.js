const express = require('express');//imports express package
const app = express();//creates instance of express application

const path = require('path');//Node utility for working with file/dir paths ie. ..//client/build below.



const PORT = 3001;//establishes port process.env.PORT ||

const { authMiddleware } = require('./utils/auth');
const { ApolloServer } = require('apollo-server-express');//


const { typeDefs, resolvers } = require('./schemas');//imports the type definitions and resolvers for use in gql schema


const server = new ApolloServer({//creates new instance of ApolloServer using typeDefs & resolvers
  typeDefs,
  resolvers,
  context: authMiddleware,
});

app.use(express.urlencoded({ extended: true }));//enables parsing of URL-encoded data.
app.use(express.json());//enables parsing of JSON data

// if we're in production mode (defined as NODE_ENV) serve client React app static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
} else if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config({path: '../.env'});
}

const db = require('./config/connection');//imports the connection object from the config folder.  Connects to MongoDB using Mongoose.
const startApolloServer = async (typeDefs, resolvers) => {
  await server.start();
  server.applyMiddleware({ app });
  //starts the server and listens for incoming requests. Once connection established, app listens on the specified port.
  db.once('open', () => {
    app.listen(PORT, () => console.log(`Now listening on localhost: ${PORT}`));
  });
}
startApolloServer(typeDefs, resolvers);