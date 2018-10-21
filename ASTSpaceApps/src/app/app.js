/** AIzaSyAW8pQBqAxchOUPXkt41Yvi2RGZE6rF2Hs  */

/** GEOLOCATION API */
const natGeoKey = '3a03e0800e99420783f38f0556fc65ee'
const googlekey = 'AIzaSyAW8pQBqAxchOUPXkt41Yvi2RGZE6rF2Hs'
const request = require('request');
/*
request({
    url: 'https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyAveWVLoYq6ljCkofdltKYYRy6FLnEw9As',
    json: true
}, (error, response, body) => {
    console.log(JSON.stringify(body,undefined,3));
});*/
/*
request({
    url: 'https://maps.googleapis.com/maps/api/geocode/json?latlng=40.714224,-73.961452&key=AIzaSyAW8pQBqAxchOUPXkt41Yvi2RGZE6rF2Hs ',
    json: true
}, (error, response, body) => {
    console.log(JSON.stringify(body,undefined,3));
});*/

/** GEOCODING API */
function getPlace(longitud, latitude) {
    request({
        url: 'https://maps.googleapis.com/maps/api/geocode/json?latlng='+longitud+','+latitude+'&key='+googlekey,
        json: true
    }, (error, response, body) => {
        console.log(JSON.stringify(body,undefined,3));
    });
}

getPlace(40.714224,-73.961452);