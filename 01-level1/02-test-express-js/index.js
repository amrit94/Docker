// Import the express library
const express = require('express');

// Create an instance of the express application
const app = express();

// Define the port the server will run on
const PORT = 3000;

// Define a simple GET route for the root URL ('/')
// The function takes two arguments:
//   req: the request object (contains information about the incoming HTTP request)
//   res: the response object (used to send a response back to the client)
app.get('/', (req, res) => {
  // Send a string "Hello, World!" as the response
  res.send('Hello, World!');
});

// Start the server and make it listen for incoming requests on the specified port
app.listen(PORT, () => {
  // Log a message to the console to confirm the server is running
  console.log(`Server is running at http://localhost:${PORT}`);
});

