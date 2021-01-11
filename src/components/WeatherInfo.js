import React, { useEffect, useState } from 'react';

const WeatherInfo = () => {
  useEffect(() => {
    geoLocationRequest();
  }),
    [];

  // Variables
  const api = 'https://api.openweathermap.org/data/2.5/weather?';
  const key = '&APPID=8c77ba2f06ce2e1985605723650676a9';

  const [location, setLocation] = useState();
  const [temperature, setTemperature] = useState();
  const [humidity, setHumidity] = useState();
  const [summary, setSummary] = useState();

  // AJAX request - http request url concat
  function getWeather(lat, lon) {
    const httpRequest = new XMLHttpRequest();
    const urlString = `${api + lat}&${lon}${key}`;

    httpRequest.open('GET', urlString);
    httpRequest.send();

    // http request - JSON parse response
    httpRequest.onload = function httpReq() {
      const myArr = JSON.parse(this.responseText);

      const tempConv =
        Math.round((myArr.main.temp - 273.15) * 1.8 + 32) +
        String.fromCharCode(176);

      document.getElementById('city').innerHTML = myArr.name;
      document.getElementById('temperature').innerHTML = tempConv;
      document.getElementById('humidity').innerHTML = `${myArr.main.humidity}%`;
      document.getElementById('summary').innerHTML =
        myArr.weather[0].description;
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

  return (
    <div class="wrap">
      <div class="container-info">
        <div class="row align-items-center">
          <div class="col">
            <h2>Location</h2>
            <span id="city"></span>
          </div>
          <div class="col">
            <h2>Temperature</h2>
            <span id="temperature"></span>
          </div>
          <div class="col">
            <h2>Humidity</h2>
            <span id="humidity"></span>
          </div>
          <div class="col">
            <h2>Summary</h2>
            <span id="summary"></span>
          </div>
        </div>
      </div>
      <div class="container-info">
        <div class="row align-items-end">
          <div class="col">
            <button
              type="button"
              class="btn btn-outline-dark"
              onclick="location.reload();"
            >
              UPDATE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherInfo;
