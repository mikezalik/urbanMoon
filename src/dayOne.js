'use strict';

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
            <div class="col">
                <h2>Humidity</h2>
                <span id="currentHumidity"></span>
            </div>
            <div class="col">
                <h2>Summary</h2>
                <span id="currentSummary"></span>
            </div>
        </div>
        );      
    }
};

export default DayOne;