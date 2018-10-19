// urbanMoon JavaScript
// Variables

var api = "https://cors-anywhere.herokuapp.com/api.openweathermap.org/data/2.5/weather?";
var key = "&APPID=8c77ba2f06ce2e1985605723650676a9";
var lat, lon;
var tempUnit = 'C';
var currentTemperatureInCelsius;

// Geolocation - lat, lon for openweather API

//TODO: Update ElementID

function geoLocate () {

    if (!navigator.geolocation){
        console.log = "Geolocation is not supported by your browser";
        return;
    } else {
    
    function success(position) {
        var lat = "lat=" + position.coords.latitude;
        var lon = "lon=" + position.coords.longitude;
        getWeather(lat, lon);
    }
    navigator.geolocation.getCurrentPosition(success);   
    }
}

//AJAX request - Data received in JSON

//TODO: Complete AJAX request and add DOM manipulation elements.
//TODO: Add temp conversion? May be required if OpenWeatherAPI returns C

function getWeather(lat, lon) {
    var httpRequest = new XMLHttpRequest();
    var urlString = api + lat + "&" + lon + key;


    httpRequest.onreadystatechange=function(){
        if(this.readystate==4 && this.status==200) {
            var myArr= JSON.parse(this.responseText);
            myFunction (myArr);
        }
    };

        httpRequest.open('GET', urlString, true);
        httpRequest.send();
    }
