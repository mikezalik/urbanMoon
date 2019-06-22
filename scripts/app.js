// urbanMoon JavaScript

// Variables
const api = 'https://api.openweathermap.org/data/2.5/weather?';
const key = '&APPID=8c77ba2f06ce2e1985605723650676a9';

// AJAX request
function getWeather(lat, lon) {
  const httpRequest = new XMLHttpRequest();
  const urlString = `${api + lat}&${lon}${key}`;

  httpRequest.open('GET', urlString);
  httpRequest.send();

  httpRequest.onload = function httpReq() {
    const myArr = JSON.parse(this.responseText);

    const tempConv = Math.round((myArr.main.temp - 273.15) * 1.8 + 32) + String.fromCharCode(176);

    document.getElementById('city').innerHTML = myArr.name;
    document.getElementById('temperature').innerHTML = tempConv;
    document.getElementById('humidity').innerHTML = `${myArr.main.humidity}%`;
    document.getElementById('summary').innerHTML = myArr.weather[0].description;
  };
}

// Latitude and Longitude if geolocation is successful
const geoLocationSuccess = function success(position) {
  const lat = `lat=${position.coords.latitude}`;
  const lon = `lon=${position.coords.longitude}`;
  getWeather(lat, lon);
};

// Geolocation flow - lat, lon for openweather API
const geoLocationRequest = function geoLocate() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(geoLocationSuccess);
    console.log('Success');
  } else {
    alert('Geolocation is not supported by this browser');
  }
};

// geoLocationRequest on page load
document.addEventListener('load', geoLocationRequest());
