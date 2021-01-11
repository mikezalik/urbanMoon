import React from 'react';
import ReactDOM from 'react-dom';

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
