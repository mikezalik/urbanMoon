// urbanMoon JavaScript
// TODO: React?

// Variables
let api = 'https://api.openweathermap.org/data/2.5/weather?';
let key = '&APPID=8c77ba2f06ce2e1985605723650676a9';
let lat; var 
lon;

// geoLocate on page load
document.addEventListener('load', geoLocate());

// Geolocation - lat, lon for openweather API
function geoLocate() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(success);
    console.log('Success');
  } else {
    alert('Geolocation is not supported by this browser');
  }
}
function success(position) {
  let lat = 'lat=' + position.coords.latitude;
  let lon = 'lon=' + position.coords.longitude;
  getWeather(lat, lon);
}


// AJAX request
function getWeather(lat, lon) {
  let httpRequest = new XMLHttpRequest();
  let urlString = `${api + lat  }&${  lon  }${key}`;

  httpRequest.open('GET', urlString);
  httpRequest.send();

  httpRequest.onload = function () {
    var myArr = httpRequest.response;
    var myArr = JSON.parse(this.responseText);

    tempConv = Math.round((myArr.main.temp - 273.15) * 1.8 + 32) + String.fromCharCode(176);

    document.getElementById('city').innerHTML = myArr.name;
    document.getElementById('temperature').innerHTML = tempConv;
    document.getElementById('humidity').innerHTML = `${myArr.main.humidity  }%`;
    document.getElementById('summary').innerHTML = myArr.weather[0].description;
  };
}
