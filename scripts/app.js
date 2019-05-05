// urbanMoon JavaScript
// TODO: React?

// Variables
var api = "https://api.openweathermap.org/data/2.5/forecast/daily?";
var key = "&APPID=a60f333d8b9fb5afc4078cd45c37def8";
var lat, lon;

//geoLocate on page load
document.addEventListener("load", geoLocate());

// Geolocation - lat, lon for openweather API
function geoLocate() {

    if (navigator.geolocation){
        navigator.geolocation.getCurrentPosition(success);
        console.log("Success");
    } else {
        alert("Geolocation is not supported by this browser");
    }
}
    function success(position) {
        var lat = "lat=" + position.coords.latitude;
        var lon = "lon=" + position.coords.longitude;
        getWeather(lat, lon);
    }

    
//AJAX request
function getWeather(lat, lon) {
    var httpRequest = new XMLHttpRequest();
    var urlString = api + lat + "&" + lon + key;

    httpRequest.open('GET', urlString);
    httpRequest.send();
    
        httpRequest.onload=function(){
            var myArr = httpRequest.response;
            var myArr= JSON.parse(this.responseText);

            tempConv = Math.round((myArr.main.temp - 273.15) * 1.8 + 32) + String.fromCharCode (176);
            
            document.getElementById("city").innerHTML = myArr.name;
            document.getElementById("temperature").innerHTML = tempConv;
            document.getElementById("humidity").innerHTML = myArr.main.humidity + "%";
            document.getElementById("summary").innerHTML = myArr.weather[0].description;
        };
}

