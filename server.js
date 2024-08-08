// All of the code to spin up the node.js server
// Import syntax to support node.js. Not the "import <insert> from <insert>" syntax we're used to
const express = require("express");

// Importing routes
const characterRoutes = require("./api/routes/characters/characters.js");
const attackRoutes = require("./api/routes/attacks/attacks.js");
const weaponRoutes = require("./api/routes/weapons/weapons.js");

// Importing our app file with the node js syntax
const app = express();

// Establishing a port for the API to run on a built in node enviorment port OR our hardcoded 3000 port
const port = process.env.port || 3000;

// Middlewear to parse response objects into JSON
app.use(express.json());

// Setting a default route with a request and response callback function
app.get("/", (req, res) => {
  res.send("connection successful");
});

// Connection to our separate routes within the route folder
app.use("/api/v1/characters", characterRoutes);
app.use("/api/v1/attacks", attackRoutes);
app.use("/api/v1/weapons", weaponRoutes);

// using the listen method to start the server. Were passing the port as an argument. This is telling the server where to listen
app.listen(port, () => {
  console.log(`success. App is now listening on ${port}`);
});
