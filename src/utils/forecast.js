const request = require('request')

const getForecast = ({ latitude, longitude }, callback ) => {
    const url = 'http://api.weatherstack.com/current?access_key=3ebfd26c4f1a2a92083ac96df33cd2c4&query='+ latitude + ',' + longitude

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather services.', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            const data = body.current
            callback(undefined, "It is currently " + data.temperature + " degrees out. There is " + data.precip + "% chance of rain.")
        }
    })
}

module.exports = getForecast