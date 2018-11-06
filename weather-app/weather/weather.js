const request = require('request');

var getWeather = (geoLocation, callback) => {

    request({
        url: `https://api.darksky.net/forecast/8acfb4fb27eef44948669fe522f36bd3/${geoLocation.latitude},${geoLocation.longtitude}?units=si`,
        json: true
    }, (error, response, body) => {
        if (error) {
            callback('Unable to connect to Dark Sky.');
        }
        else if (body.code === 400 || !body.currently) {
            callback('Unable to fetch weather.');
        }
        else {
            callback(undefined,{
                temperature:body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature
            });
        }

    });
};

module.exports = {
    getWeather
};