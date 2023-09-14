// Require express - gives us a function
const express = require('express');

// Create an instance of express by calling the function returned above - gives us an object
const app = express();
const port = process.env.PORT || 5001;

// express static file serving - public is the folder name
app.use(express.static('server/public'));

// Start up our server
app.listen(port, () => {
    console.log('listening on port', port);
});