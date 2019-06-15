class DayOne extends React.Component {
  render() {
    return (
      <div>
        <div className="col">
          <h2>Date</h2>
          <span id="currentDateTime" />
        </div>
        <div className="col">
          <h2>Temperature</h2>
          <span id="currentTemperature" />
        </div>
        <div className="col">
          <h2>Humidity</h2>
          <span id="currentHumidity" />
        </div>
        <div className="col">
          <h2>Summary</h2>
          <span id="currentSummary" />
        </div>
      </div>
    );
  }
}

export default DayOne;
