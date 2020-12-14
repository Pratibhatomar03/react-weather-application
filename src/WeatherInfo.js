import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="main-discription">
        <ul>
          <li>{props.data.city}</li>
          <li>
            <FormattedDate date={props.data.date} />
          </li>
          <li>
            <WeatherTemperature celsius={props.data.temperature} />
          </li>
          <li className="text-capitalize">{props.data.description}</li>
          <li>
            <WeatherIcon code={props.data.icon} />
          </li>
        </ul>
      </div>

      <div className="row">
        <div className="col-6">
          <ul>
            <li>Wind: {Math.round(props.data.wind)}km/hr</li>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Feels like: {Math.round(props.data.feels)}° </li>
          </ul>
        </div>
        <div className="col-6">
          <ul>
            <li>Maximum Temperature: {Math.round(props.data.maxtemp)}° </li>
            <li>Minimum Temeprature: {Math.round(props.data.mintemp)}° </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
