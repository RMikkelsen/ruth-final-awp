/**** Node.js libraries *****/
const path = require('path');

/**** External libraries ****/
const express = require('express'); 
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');
const checkJwt = require("express-jwt"); // Validates access tokens automatically

/**** Configuration ****/
const app = express();
//const port = process.env.PORT || 8080;
app.use(express.json()); // Parse JSON from the request body
const MONGO_URL = process.env.MONGO_URL || 'mongodb://localhost/posts'; 
async function createServer() {
  // Connect db
  await mongoose.connect(MONGO_URL, {useNewUrlParser: true, useUnifiedTopology: true});

  // Create data


  const postDB = require('./postDB')(mongoose);
 await postDB.bootstrap();
  
  // Require routes
  const routes = require("./routes")(postDB); // Inject mongoose into routes module

const openPaths = [
  // Open "/api/users/authenticate" for POST requests
  { url: "/api/users/authenticate", methods: ["POST"] },

  // Open everything that doesn't begin with "/api"
  /^(?!\/api).*/gim,
 

  // Open all GET requests on the form "/api/questions/*" using a regular expression
  { url: /\/api\/posts\.*/gim, methods: ["GET"] },
  { url: /\/api\/posts\.*/gim, methods: ["POST"] }
];

// The secret value. Defaults to "the cake is a lie".
const secret = process.env.SECRET || "the cake is a lie";

// Validate the user token using checkJwt middleware.
app.use(checkJwt({ secret, algorithms: ["HS512"] }).unless({ path: openPaths }));

// This middleware checks the result of checkJwt above
app.use((err, req, res, next) => {
  if (err.name === "UnauthorizedError") { // If the user didn't authorize correctly
    res.status(401).json({ error: err.message }); // Return 401 with error message.
  } else {
    next(); // If no errors, forward request to next middleware or route handler
  }
});

// Some test data
//const data = [
// { id: 1, name: "Garfield", hobbies: ["Purring", "Sleeping", "Eating"] },
//{ id: 2, name: "Tom", hobbies: ["Purring", "Eating"] },
// { id: 3, name: "Felix", hobbies: ["Sleeping", "Eating"] },
//];

// The routes
const userRoutes = require("./userRoutes")(secret);
//const routes = require("./routes")(data);
app.use("/api/users", userRoutes);
app.use("/api/posts", routes);

  // Add middleware
  app.use(bodyParser.json()); 
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(morgan('combined')); 
  app.use(cors());
  app.use(express.static(path.resolve('..', 'client', 'build'))); 
  
  // Add routes


  // "Redirect" all non-API GET requests to React's entry point (index.html)
  app.get('*', (req, res) =>
    res.sendFile(path.resolve('..', 'client', 'build', 'index.html'))
  );
  
  return app;
}

module.exports = createServer;