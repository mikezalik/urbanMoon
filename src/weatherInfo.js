'use strict';

export class WeatherInfo extends React.Component {
    render () {
        const date = document.getElementById("currentDateTime").innerHTML = myArr.list[0].dt_txt;
        return (
            <div>
                <div>
                    <h2>{date}</h2>
                </div>
                <div>
                    <h2>{date2}</h2>
                </div>
                <div>
                    <h2>{date3}</h2>
                </div>
                <div>
                    <h2>{date4}</h2>
                </div>
                <div>
                    <h2>{date5}</h2>
                </div>
            </div>
        )
    }
}