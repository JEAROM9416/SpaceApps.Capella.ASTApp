/** AIzaSyAW8pQBqAxchOUPXkt41Yvi2RGZE6rF2Hs  */

/** GEOLOCATION API */
const natGeoKey = '3a03e0800e99420783f38f0556fc65ee'
const googlekey = 'AIzaSyAW8pQBqAxchOUPXkt41Yvi2RGZE6rF2Hs'
const request = require('request');

/** GEOCODING API */
function getPlaceByLanLat(longitud, latitude) {
    request({
        url: 'https://maps.googleapis.com/maps/api/geocode/json?latlng='+longitud+','+latitude+'&key='+googlekey,
        json: true
    }, (error, response, body) => {
        console.log(JSON.stringify(body,undefined,2));
    });
}

//getPlaceByLanLat(40.714224,-73.961452);

function getPlaceByName(placename) {
    request({
        url: 'https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input='+placename+'&key='+googlekey,
        json: true
    }, (error, response, body) => {
        console.log(JSON.stringify(body,undefined,2));
    });
}

getPlaceByName('Tecnológico de Costa Rica')