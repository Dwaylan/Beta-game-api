// All of the code to spin up the node.js server
// Import syntax to support node.js. Not the "import <insert> from <insert>" syntax we're used to
const http = require("http");

// Importing our app file with the node js syntax
const app = require("./app");

// Establishing a port for the API to run on a built in node enviorment port OR our hardcoded 3000 port
const port = process.env.port || 3000;

// Creating the server with a createServer method. A listener is passed as a property inside of the create server method
const server = http.createServer(app);

// using the listen method to start the server. Were passing the port as an argument. This is telling the server where to listen
server.listen(port);
