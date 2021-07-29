var path = require('path')
const express = require('express')
const dotenv = require('dotenv')
const mockAPIResponse = require('./mockAPI.js')
const axios = require('axios').default

// Setup environment variables
dotenv.config()
console.log(`Your API key is ${process.env.API_KEY}`)

// Create app instance
const app = express()

// Dependencies
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initializing the main project folder
app.use(express.static('dist'))
// app.use(express.static('src/client'))


// log directory name
console.log(__dirname)


// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
})

// Get routes
app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
    // res.sendFile(path.resolve('src/client/views/index.html'))
})

// return mockAPIResponse on /test route
app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})
