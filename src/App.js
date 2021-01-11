import React from 'react';
import ReactDOM from 'react-dom';
import 'regenerator-runtime';
import Jumbotron from './components/Jumbotron';
import Navbar from './components/Navbar';
import NavbarBottom from './components/NavbarBottom';
import WeatherInfo from './components/WeatherInfo';

const App = () => {
  return (
    <div>
      <Navbar />
      <Jumbotron />
      <WeatherInfo />
      <NavbarBottom />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
