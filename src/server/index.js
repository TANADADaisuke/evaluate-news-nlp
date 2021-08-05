var path = require('path')
const express = require('express')
const dotenv = require('dotenv')
const mockAPIResponse = require('./mockAPI.js')
const axios = require('axios').default
const FormData = require('form-data')

// Set meaningcloud api variables
dotenv.config()
const apiKey = process.env.API_KEY
const apiUrl = 'https://api.meaningcloud.com/sentiment-2.1'

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

// Post routes
// functions
// create response data for updating UI
const updataUIResponse = (res) => {
    if (res.status === false) {
        const errorResponse = {
            'success': false
        }
        return errorResponse
    }
    const html = '<ul>' + 
        '<li>score tag: ' + res.score_tag + '</li>' + 
        '<li>agreement: ' + res.agreement + '</li>' + 
        '<li>subjectivity: ' + res.subjectivity + '</li>' + 
        '<li>confidence: ' + res.confidence + '</li>' + 
        '<li>irony: ' + res.irony + '</li>' + 
    '</ul>'
    const apiResponse = {
        'success': true,
        'score_tag': res.score_tag,
        'agreement': res.agreement,
        'subjectivity': res.subjectivity,
        'confidence': res.confidence,
        'irony': res.irony,
        'message': html
    }

    return apiResponse
} 

// interact with meaningcloud api and return NLP results
const executeNlp = async (req) => {
    const text = req.body.text
    try {
        const formData = new FormData()
        formData.append('key', apiKey)
        formData.append('lang', 'en')
        formData.append('txt', text)
        const formHeaders = formData.getHeaders()
        const res = await axios.post(apiUrl, formData, {
            headers: {
                ...formHeaders,
            }
        })
        return res.data
    } catch (error) {
        console.log('error', error)
        const errorData = {
            'status': false
        }
        return errorData
    }
}

// function for post request on /test
const performAction = (req, res) => {
    executeNlp(req)
    .then(data => updataUIResponse(data))
    .then(message => {
        res.send(message)
    })
    .catch(error => {
        console.log('error', error)
    })
}

// post response
app.post('/test', performAction)
