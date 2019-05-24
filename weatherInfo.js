'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var WeatherInfo = function (_React$Component) {
    _inherits(WeatherInfo, _React$Component);

    function WeatherInfo() {
        _classCallCheck(this, WeatherInfo);

        return _possibleConstructorReturn(this, (WeatherInfo.__proto__ || Object.getPrototypeOf(WeatherInfo)).apply(this, arguments));
    }

    _createClass(WeatherInfo, [{
        key: "render",
        value: function render() {
            var date = document.getElementById("currentDateTime").innerHTML = myArr.list[0].dt_txt;
            var date2 = document.getElementById("day2DateTime").innerHTML = myArr.list[8].dt_txt;
            var date3 = document.getElementById("day3DateTime").innerHTML = myArr.list[16].dt_txt;
            var date4 = document.getElementById("day4DateTime").innerHTML = myArr.list[24].dt_txt;
            var date5 = document.getElementById("day5DateTime").innerHTML = myArr.list[32].dt_txt;
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "div",
                    null,
                    React.createElement(
                        "h2",
                        null,
                        date
                    )
                ),
                React.createElement(
                    "div",
                    null,
                    React.createElement(
                        "h2",
                        null,
                        date2
                    )
                ),
                React.createElement(
                    "div",
                    null,
                    React.createElement(
                        "h2",
                        null,
                        date3
                    )
                ),
                React.createElement(
                    "div",
                    null,
                    React.createElement(
                        "h2",
                        null,
                        date4
                    )
                ),
                React.createElement(
                    "div",
                    null,
                    React.createElement(
                        "h2",
                        null,
                        date5
                    )
                )
            );
        }
    }]);

    return WeatherInfo;
}(React.Component);