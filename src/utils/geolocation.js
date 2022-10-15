const request = require('request')

const getGeolocation = (address, callback) => {
    const url = 'http://api.positionstack.com/v1/forward?access_key=260aa259e5d4f45c898c1395e09dcd90&query=' + encodeURIComponent(address) + '&limit=1'
    
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to location services.', undefined)
        } else if (body.error) {
            callback('Unable to find address', undefined)
        } else {
            const data = body.data[0]
            callback(undefined, {
                latitude: data.latitude,
                longitude: data.longitude,
                location: data.label
            })
        }
    })
}

module.exports = getGeolocation