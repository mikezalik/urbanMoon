// urbanMoon JavaScript
// TODO: React?

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

            function unixTimeConversion (myArr) {
                

                var months_arr = ['Jan','Feb','Mar','Apr','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
                var date = new Date(myArr.list.dt * 1000);
                var year = date.getFullYear();
                var month = months_arr[date.getMonth()];
                var day = date.getDate();
                
                var convTime = month+'-'+day+'-'+year;
                document.getElementById('datetime').innerHTML = convTime;


            }
            
            document.getElementById("city").innerHTML = myArr.name;
            document.getElementById("temperature").innerHTML = tempConv;
            document.getElementById("humidity").innerHTML = myArr.main.humidity + "%";
            document.getElementById("summary").innerHTML = myArr.weather[0].description;
            unixTimeConversion(myArr);
        };
}

