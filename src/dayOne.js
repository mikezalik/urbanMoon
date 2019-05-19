'use strict';
import { WeatherInfo } from "./weatherInfo";

class DayOne extends React.Component {
    render() {
        return (
        <div>
            <WeatherInfo />

        </div>
        );      
    }
};

ReactDOM.render(<DayOne />, document.querySelector('#row align-items-center'));