const request = require('request');

var getGeocodeAddress = (adress, callback) => {
    var encodedAddress = encodeURIComponent(adress);

    request({
        url: `http://www.mapquestapi.com/geocoding/v1/address?key=mXTDy0GeXIO3ObcOcJBKllVvmMmG1Hj8&location=${encodedAddress}`,
        json: true
    }, (error, response, body) => {
        if (error) {
            callback("Something's wrong");
        }
        else if (body.results[0].locations.length === 0) {
            callback('Unable to find this place.');
        }
        else if (body.info.statuscode === 0) {
            var formatedAddress = formateAddress(body.results[0].locations[0])
            callback(undefined, {
                address: formatedAddress,
                latitude: body.results[0].locations[0].latLng.lat,
                longtitude: body.results[0].locations[0].latLng.lng
            });
        }
    });
};

var formateAddress = (obj) => {
    var formatedAddress = '';
    if (obj['street'] !== '') {
        formatedAddress += `${obj['street']}, `;
    }

    for (let index = 6; index >= 1; index--) {
        if (index !== 2) {
            var key = `adminArea${index.toString()}`;
            if (obj[key] !== '') {
                formatedAddress += obj[key];

                if (index > 1) {
                    formatedAddress += ', ';
                }
            }
        }
    }

    return formatedAddress;

};

module.exports = {
    getGeocodeAddress
};