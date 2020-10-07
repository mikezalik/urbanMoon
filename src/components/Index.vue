<template>
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
    <title>UrbanMoon - The Weather App</title>
    <meta name="description" content="" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale= .99, shrink-to-fit=no"
    />
    <link
      rel="stylesheet preconnect"
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
      integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO"
      crossorigin="anonymous"
    />
    <link
      href="https://fonts.googleapis.com/css?family=Oswald"
      rel="stylesheet preconnect"
    />
    <link
      href="https://fonts.googleapis.com/css?family=Nanum+Gothic"
      rel="stylesheet preconnect"
    />
  </head>
  <body>
    <nav class="navbar sticky-top navbar-dark bg-dark">
      <span class="navbar-brand mb-0 h1">UrbanMoon</span>
    </nav>
    <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <h1 class="display-3"></h1>
        <h1 class="display-1">&#x1F318;</h1>
        <p class="lead"></p>
      </div>
    </div>
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
  </body>
  <footer>
    <div id="navbar-b">Michael Zalik</div>
  </footer>
</template>

<script>
// urbanMoon JavaScript

// Variables
const api = "https://api.openweathermap.org/data/2.5/weather?";
const key = "&APPID=8c77ba2f06ce2e1985605723650676a9";

// AJAX request - http request url concat
function getWeather(lat, lon) {
  const httpRequest = new XMLHttpRequest();
  const urlString = `${api + lat}&${lon}${key}`;

  httpRequest.open("GET", urlString);
  httpRequest.send();

  // http request - JSON parse response
  httpRequest.onload = function httpReq() {
    const myArr = JSON.parse(this.responseText);

    const tempConv =
      Math.round((myArr.main.temp - 273.15) * 1.8 + 32) +
      String.fromCharCode(176);

    document.getElementById("city").innerHTML = myArr.name;
    document.getElementById("temperature").innerHTML = tempConv;
    document.getElementById("humidity").innerHTML = `${myArr.main.humidity}%`;
    document.getElementById("summary").innerHTML = myArr.weather[0].description;
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
    console.log("Success");
  } else {
    alert("Geolocation is not supported by this browser");
  }
};

// geoLocationRequest on page load
document.addEventListener("load", geoLocationRequest());

export default {
  name: "Index",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* As hex codes */

.color-primary-0 {
  color: #6c738a;
} /* Main Primary color */
.color-primary-1 {
  color: #f0f0eb;
}
.color-primary-2 {
  color: #f0f0eb;
}
.color-primary-3 {
  color: #4f5974;
}
.color-primary-4 {
  color: #37405c;
}

.color-secondary-1-0 {
  color: #ccc49a;
} /* Main Secondary color (1) */
.color-secondary-1-1 {
  color: #fffdf0;
}
.color-secondary-1-2 {
  color: #f1eccf;
}
.color-secondary-1-3 {
  color: #aca26f;
}
.color-secondary-1-4 {
  color: #897f4b;
}

.color-secondary-2-0 {
  color: #ccb29a;
} /* Main Secondary color (2) */
.color-secondary-2-1 {
  color: #fff7f0;
}
.color-secondary-2-2 {
  color: #f1dfcf;
}
.color-secondary-2-3 {
  color: #ac8c6f;
}
.color-secondary-2-4 {
  color: #89684b;
}

/* MEDIA QUERIES */

/* @media all and (min-width: 1024px) and (max-width: 1280px) { }
@media all and (min-width: 768px) and (max-width: 1024px) { }
@media all and (min-width: 370px) and (max-width: 768px) { }
@media all and (max-width: 370px) { } */

/* GENERAL */
* {
  font-size: 16px;
}
body {
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  display: block;
  background-color: #f0f0eb;
}
@media all and (max-width: 370px) {
  * {
    max-height: 17em;
  }
  h2 {
    font-size: 1.5em;
  }
  body {
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    display: block;
    background-color: #bec1c9;
    max-width: 100%;
  }
  .display-3 {
    font-size: 2.8em;
  }

  .display-1 {
    font-size: 6em;
  }
}
@media all and (min-width: 370px) and (max-width: 768px) {
  * {
    max-height: 30em;
  }
  h2 {
    font-size: 1.5em;
  }

  .display-3 {
    font-size: 4em;
  }
  .display-1 {
    font-size: 8em;
  }
}

/* NAVBAR */
.navbar {
  background-color: #ac8c6f;
  box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.1);
}
.navbar-dark {
  background-color: #ac8c6f;
}
.bg-dark {
  background-color: #ac8c6f;
}

/* TITLE */
.jumbotron {
  background-color: #4f5974;
  font-family: "Oswald", sans-serif;
  justify-content: center;
}
.display-1 {
  font-size: 14em;
}
@media all and (max-width: 370px) {
  .jumbotron {
    background-color: #4f5974;
    font-family: "Oswald", sans-serif;
    justify-content: center;
    padding: 0.8em;
  }
}
@media all and (min-width: 370px) and (max-width: 768px) {
  .jumbotron {
    background-color: #4f5974;
    font-family: "Oswald", sans-serif;
    justify-content: center;
    padding: 0.5em;
  }
}

/* MAIN CONTENT */
.row {
  background-color: #f0f0eb;
}
.container {
  padding: 0.5em;
  background-color: #4f5974;
  border: none;
  border-radius: 5px;
}
@media all and (max-width: 370px) {
  .container {
    padding: 0.1em;
    background-color: #4f5974;
    border: none;
    border-radius: 5px;
  }
}
@media all and (min-width: 370px) and (max-width: 768px) {
  .container {
    padding: 0.3em;
    background-color: #4f5974;
    border: none;
    border-radius: 5px;
  }
}
.container-info {
  font-family: "Nanum Gothic", sans-serif;
  padding: 3em;
  background-color: #f0f0eb;
  border: none;
  border-radius: 5px;
}
@media all and (max-width: 370px) {
  .container-info {
    padding: 0.1em;
    background-color: #f0f0eb;
    border: none;
    border-radius: 5px;
  }
}
@media all and (min-width: 370px) and (max-width: 768px) {
  .container-info {
    padding: 0.5em;
    background-color: #f0f0eb;
    border: none;
    border-radius: 5px;
    font-size: 0.5em;
    margin-left: auto;
    margin-right: auto;
    max-width: 90%;
  }
}
/* FOOTER */
#navbar-b {
  overflow: hidden;
  background-color: #4f5974;
  position: fixed;
  bottom: 0px;
  width: 100%;
  padding: 1em;
  text-align: left;
  font-size: 0.5em;
}
</style>
