const yargs = require('yargs');

const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');
const argv = yargs
    .options({
        a: {
            demand: true,
            alias: 'address',
            describe: 'Address to fetch weather for',
            string: true
        }
    })
    .help()
    .argv;
geocode.getGeocodeAddress(argv.a, (errorMessage, geoResults) => {
    if(errorMessage)
    {
        console.log(errorMessage);
    }
    else
    {
        console.log(geoResults.address);
        weather.getWeather(geoResults, (errorMessage, weatherResults) => {
            if(errorMessage)
            {
                console.log(errorMessage);
            }
            else{
                console.log(`It's currently ${weatherResults.temperature}. It feels like ${weatherResults.apparentTemperature}.`);
            }
        });
    }
});

// const request = require('request');
// request({
//     url: `https://api.darksky.net/forecast/8acfb4fb27eef44948669fe522f36bd3/53.98761,-6.3955?units=si`,
//     json: true
// }, (error, response, body) => {
//     if(error)
//     {
//         console.log('Unable to connect to Dark Sky.');
//     }
//     else if(body.code === 400 || !body.currently )
//     {
//         console.log('Unable to fetch weather.');
//     }
//     else{
//         console.log(body.currently.temperature);
//     }
    
// });


// https://api.darksky.net/forecast/8acfb4fb27eef44948669fe522f36bd3/37.8267,-122.4233