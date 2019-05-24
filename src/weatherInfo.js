'use strict';

class WeatherInfo extends React.Component {
    render () {
        const date = document.getElementById("currentDateTime").innerHTML = myArr.list[0].dt_txt;
        const date2 = document.getElementById("day2DateTime").innerHTML = myArr.list[8].dt_txt;
        const date3 = document.getElementById("day3DateTime").innerHTML = myArr.list[16].dt_txt;
        const date4 = document.getElementById("day4DateTime").innerHTML = myArr.list[24].dt_txt;
        const date5 = document.getElementById("day5DateTime").innerHTML = myArr.list[32].dt_txt;   
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
        );
    }
}