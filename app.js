// Creating a file to spin up express. This will make handling request easier
// "Importing" express and morgan
const express = require("express");
const morgan = require("morgan");
//Mongoose
const mongoose = require("mongoose");

// Importing a parser middlewear
const bodyParser = require("body-parser");

// Creating route variables
// Attacks
const attackRoutes = require("./api/routes/attacks");

// Weapons
const weaponRoutes = require("./api/routes/weapons");

// Characters
const characterRoutes = require("./api/routes/characters");

// creating an app variable to execute express
const app = express();

// Using morgan middlewear to intercept route requests and log information, and bodyparser to
// parse url encoded bodies and JSON bodies
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// CORS error prevention with headers
app.use((req, res, next) => {
  req.header("Access-Control-Allow-Origin", "*");
  req.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method === "OPTIONS") {
    req.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).json({});
  }
  next();
});

// Mongoose connection
mongoose.connect(
  "mongodb+srv://Dwaylan:" +
    process.env.MONGO_ATLAS_PASSWORD +
    "@beta-game-rest-api.xwhsr7t.mongodb.net/?retryWrites=true&w=majority&appName=beta-game-rest-api",
  {
    useMongoClient: true,
  }
);

// the use method sets up middlewear to forward requests.
// Below passes two paramters. The first is a string and the second is a file.
// It basically reads, anything that has the string "/attacks" is being handled by "attachRoute"
app.use("/attacks", attackRoutes);

// Same process for weapons routing
app.use("/weapons", weaponRoutes);

// Same process for character routing
app.use("/characters", characterRoutes);

// Error handling. This is a synchronusly executed file, meaning it executes and reads code from top to bottom
// The error is placed at the the end, so if the code above isn't executed successfully, the last effort is error handling below
app.use((req, res, next) => {
  // Creating a new error instance
  const error = new Error("Not found");
  error.status = 404;
  // Passing the error to the next parameter
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500).json({
    error: {
      message: error.message,
    },
  });
});

// Export syntax for node.js
module.exports = app;
