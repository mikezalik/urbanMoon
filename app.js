//urbanMoon JavaScript
// Variables

var api = "https://cors-anywhere.herokuapp.com/api.openweathermap.org/data/2.5/weather?";
var key = "&APPID=8c77ba2f06ce2e1985605723650676a9";
var lat, lon;
var tempUnit = 'C';
var currentTemperatureInCelsius;

// Geolocation - lat, lon for openweather API

function geoLocate () {
    var output = document.getElementById("out");

    if (!navigator.geolocation){
        console.log = "Geolocation is not supported by your browser";
        return;
    }

    function success(position) {
        var lat = "lat=" + position.coords.latitude;
        var lon = "lon=" + position.coords.longitude;
        getWeather(lat, long);
    }
}