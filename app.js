// urbanMoon JavaScript
// Variables


var api = "https://cors-anywhere.herokuapp.com/api.openweathermap.org/data/2.5/weather?";
var key = "&APPID=8c77ba2f06ce2e1985605723650676a9";
var lat, lon;

// Geolocation - lat, lon for openweather API

//TODO: Set up parse to DOM elements.

document.addEventListener("load", geoLocate()); {
    console.log("Loaded");
}

function geoLocate() {

    if (navigator.geolocation){
        navigator.geolocation.getCurrentPosition(success);
        console.log("Success");
    } else {
        console.log = "Geolocation is not supported by this browser";
    }
}
    function success(position) {
        var lat = "lat=" + position.coords.latitude;
        var lon = "lon=" + position.coords.longitude;
        getWeather(lat, lon);
    }


//AJAX request - Data received in JSON

//TODO: Add temperature conversion for K to F.

function getWeather(lat, lon) {
    var httpRequest = new XMLHttpRequest();
    var urlString = api + lat + "&" + lon + key;
    var myArr= {};

    httpRequest.open('GET', urlString);
    httpRequest.send();
    
        httpRequest.onload=function(){
            var myArr = httpRequest.response;
            var myArr= JSON.parse(this.responseText);
            
            document.getElementById("city").innerHTML = myArr.name;
            document.getElementById("temperature").innerHTML = myArr.main.temp;
            document.getElementById("humidity").innerHTML = myArr.main.humidity;
            document.getElementById("summary").innerHTML = myArr.weather[0].description;
        };
    }

