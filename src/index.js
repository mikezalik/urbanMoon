import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import WeatherInfo from './weatherInfo.js';
import registerServiceWorker from './registerServiceWorker';
ReactDOM.render(<WeatherInfo />, document.getElementById(''));
registerServiceWorker();