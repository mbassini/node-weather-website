const path = require('path')
const express = require('express')

const getGeolocation = require('./utils/geolocation')
const getForecast = require('./utils/forecast')

const app = express()
const port = process.env.PORT || 3001

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../client/build')

// Setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => res.json({ title: 'Weather' }))

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me',
        name: 'Mauro Bassini'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help Page',
        message: 'This is a custom web with support purposes',
        name: 'Mauro Bassini'
    })
})

app.get('/weather', (req, res) => {
    const address = req.query.address
    
    if (!address) {
        return res.send({
            error: 'You must provide an address'
        })
    }

    getGeolocation(address, (error, { latitude, longitude, location } = {} ) => {

        if (error) return res.send({
            error: 'An error occurred!'
        })
    
        getForecast({ latitude, longitude }, (error, forecastData) => {
    
            if (error) return res.send({
                error: 'Could not fetch forecast!'
            })
            
            res.send({ 
                forecast: forecastData, 
                location, 
                address 
            })
        })
    })
})

app.get('/help/*', (req,res) => {
    res.render('404', {
        title: '404',
        name: 'Mauro Bassini',
        errorMessage: 'Help article not found.'
    })
})

app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, '../client/build/src/views', 'Error.js')))

app.listen(port, () => console.log('Server is up on port ' + port))