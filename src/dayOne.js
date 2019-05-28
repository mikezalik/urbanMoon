'use strict';
import { WeatherInfo } from "./weatherInfo";

class DayOne extends React.Component {
    render() {
        return (
        <div>
        <div class="col">
          <h2>Date</h2>
            <span id="currentDateTime"></span>
        </div>
        <div class="col">
        <h2>Temperature</h2>
        <span id="currentTemperature"></span>
        </div>

        </div>
        );      
    }
};

ReactDOM.render(<DayOne />, document.querySelector('#row align-items-center'));