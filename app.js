// urbanMoon JavaScript


// Variables
var api = "https://cors-anywhere.herokuapp.com/api.openweathermap.org/data/2.5/weather?";
var key = "&APPID=8c77ba2f06ce2e1985605723650676a9";
var lat, lon;


//geoLocate on page load
document.addEventListener("load", geoLocate()); {
    console.log("Loaded");
}

// Geolocation - lat, lon for openweather API
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




//TODO: Add temperature conversion for K to F
//TODO: Add symbols to values

//AJAX request
function getWeather(lat, lon) {
    var httpRequest = new XMLHttpRequest();
    var urlString = api + lat + "&" + lon + key;

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

