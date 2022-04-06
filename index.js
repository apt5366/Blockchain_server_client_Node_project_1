// ./index.js



// * Imports
const express= require("express"); // Imports Express's class definition
const morgan= require("morgan"); // Imports Morgan's class definition
const Blockchain= require("./src/blockchain");

//global variables
global.difficulty = 5; // difficulty to mine a particular block
global.blockchain = new Blockchain(); // our Copy of the blockchain
global.transactions = []; // the current transactions

// Initialize express's class object
const app = express();
// Tell Express to use Morgan for logging requests to the console
app.use(morgan("dev")); // Pretty-print requests with the "dev" format

//create the port number for the server to listen on
const port=8080;

// Dynamically load all routes from the ./routes folder
require("./routes")(app);

// Configure our server to run
app.listen(port, () => {
    // Log that our server is running in the terminal
    console.log(`Server is listening at http://localhost:${port}/`);
});

