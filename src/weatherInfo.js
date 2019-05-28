'use strict';
import React from 'react'; 
import { myArr } from '../app.js';

export class WeatherInfo extends React.Component {
    render () {
        return (
            <div>
                <dayOne />
                <dayTwo />
                <dayThree />
                <dayFour />
                <dayFive />
            </div>
        );
    }
}