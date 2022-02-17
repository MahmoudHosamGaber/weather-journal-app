// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();

/* Middleware*/
const bodyParser = require('body-parser');
const cors = require('cors');

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));

// Setup Server
const PORT = 3000;
const serverRunning = (port) => {
  console.log(`Server running successfully on port ${port}`);
};

app.get('/app', (req, res) => {
  res.send(projectData);
  console.log(projectData);
});

const addData = (req, res) => {
  const data = req.body;
  projectData['temperature'] = data.temperature;
  projectData['date'] = data.date;
  projectData['userResponse'] = data.userResponse;
  //   console.log(data);
  //   res.statusCode = 200;
  //   res.setHeader('Content-Type', 'text/html');
  //   res.end('<html><body><body><h1>About Us</h1></body></html>');
};
// data = {
//   temperature: 1,
//   date: 2,
//   userResponse: 3,
// };

app.post('/add', addData);

app.listen(PORT, serverRunning(PORT));
