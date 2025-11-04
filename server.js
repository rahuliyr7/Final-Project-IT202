// 1. Setup the Server
const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// 2. Serve all static assets (HTML, CSS, JS, Images) from the current directory
app.use(express.static(__dirname)); 

// 3. Define a Route for the Home Page
app.get('/', (req, res) => {
    // Sends the HTML file as the response for the root URL
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/checkout', (req, res) => {
    res.sendFile(path.join(__dirname, 'checkout.html'));
});

// 4. Define a simple API Route to get the data
app.get('/api/data', (req, res) => {
    // Automatically reads and sends data.json to the client
    res.sendFile(path.join(__dirname, 'data.json')); 
});

// 5. Start the Server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});