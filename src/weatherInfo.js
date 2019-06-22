import React from 'react';
import { myArr } from '../app.js';

export class WeatherInfo extends React.Component {
  render() {
    return (
      <div>
        <Titles />
        <DayOne />
        <DayTwo />
        <DayThree />
        <DayFour />
        <DayFive />
      </div>
    );
  }
}
