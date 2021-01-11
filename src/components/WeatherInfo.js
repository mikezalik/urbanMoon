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

  const getWeather = async (lat, lon) => {
    const urlString = `${api + lat}&${lon}${key}`;
    const response = await fetch(urlString);
    const data = await response.json();
    console.log(data);

    setLocation(data.name);
    setTemperature(
      Math.round((data.main.temp - 273.15) * 1.8 + 32) +
        String.fromCharCode(176)
    );
    setHumidity(`${data.main.humidity}%`);
    setSummary(data.weather[0].main);
  };

  // Latitude and Longitude if geolocation is successful
  const geoLocationSuccess = (position) => {
    const lat = `lat=${position.coords.latitude}`;
    const lon = `lon=${position.coords.longitude}`;
    console.log('Success');
    console.log(lat, lon);
    getWeather(lat, lon);
  };

  // Geolocation flow - lat, lon for openweather API
  const geoLocationRequest = function geoLocate() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(geoLocationSuccess);
      console.log('Position requested');
    } else {
      alert('Geolocation is not supported by this browser');
    }
  };

  return (
    <div className="wrap">
      <div className="container-info">
        <div className="row align-items-center">
          <div className="col">
            <h2>Location</h2>
            <span>{location}</span>
          </div>
          <div className="col">
            <h2>Temperature</h2>
            <span>{temperature}</span>
          </div>
          <div className="col">
            <h2>Humidity</h2>
            <span>{humidity}</span>
          </div>
          <div className="col">
            <h2>Summary</h2>
            <span>{summary}</span>
          </div>
        </div>
      </div>
      <div className="container-info">
        <div className="row align-items-end">
          <div className="col">
            <button
              type="button"
              className="btn btn-outline-dark"
              onClick={geoLocationRequest()}
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
