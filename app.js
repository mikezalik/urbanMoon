// urbanMoon JavaScript
//TODO: React

// Variables
var api = "https://api.openweathermap.org/data/2.5/forecast?";
var key = "&APPID=8c77ba2f06ce2e1985605723650676a9";
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

//lat, lon to call getWeather and retrieve JSON
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
    
    httpRequest.onload = function() {
        var myArr = httpRequest.response;
        var myArr = JSON.parse(this.responseText);

        //Temperature conversion
        tempConv = Math.round((myArr.list[0].main.temp - 273.15) * 1.8 + 32) + String.fromCharCode (176);
        
        //Populate DOM
        document.getElementById("city").innerHTML = "Location \n"  + myArr.city.name;
        document.getElementById("currentTemperature").innerHTML = tempConv;
        document.getElementById("currentHumidity").innerHTML = myArr.list[0].main.humidity + "%";
        document.getElementById("currentSummary").innerHTML = myArr.list[0].weather[0].description; 
        document.getElementById("currentDateTime").innerHTML = myArr.list[0].dt_txt;
        //Day 2
        document.getElementById("day2Temperature").innerHTML = tempConv;
        document.getElementById("day2Humidity").innerHTML = myArr.list[8].main.humidity + "%";
        document.getElementById("day2Summary").innerHTML = myArr.list[8].weather[0].description; 
        document.getElementById("day2DateTime").innerHTML = myArr.list[8].dt_txt; 
        //Day 3
        document.getElementById("day3Temperature").innerHTML = tempConv;
        document.getElementById("day3Humidity").innerHTML = myArr.list[16].main.humidity + "%";
        document.getElementById("day3Summary").innerHTML = myArr.list[16].weather[0].description; 
        document.getElementById("day3DateTime").innerHTML = myArr.list[16].dt_txt; 
        //Day 4
        document.getElementById("day4Temperature").innerHTML = tempConv;
        document.getElementById("day4Humidity").innerHTML = myArr.list[24].main.humidity + "%";
        document.getElementById("day4Summary").innerHTML = myArr.list[24].weather[0].description; 
        document.getElementById("day4DateTime").innerHTML = myArr.list[24].dt_txt;
        //Day 5
        document.getElementById("day5Temperature").innerHTML = tempConv;
        document.getElementById("day5Humidity").innerHTML = myArr.list[32].main.humidity + "%";
        document.getElementById("day5Summary").innerHTML = myArr.list[32].weather[0].description; 
        document.getElementById("day5DateTime").innerHTML = myArr.list[32].dt_txt; 
    };
}