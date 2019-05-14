'use strict';

class DayOne extends React.Component {
    render() {
        return (
            <div class="col">
            <h2>Date</h2>
              <span id="currentDateTime"></span>
          </div>
        );      
    }
};

ReactDOM.render(<DayOne />, document.querySelector('#row align-items-center'));