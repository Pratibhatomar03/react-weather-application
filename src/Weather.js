import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({});
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      temperature: Math.round(response.data.main.temp),
      wind: Math.round(response.data.wind.speed),
      humidity: response.data.main.humidity,
      city: response.data.name,
      description: response.data.weather[0].description,
      feels: Math.round(response.data.main.feels_like),
      maxtemp: Math.round(response.data.main.temp_max),
      mintemp: Math.round(response.data.main.temp_min),
    });

    setReady(true);
  }
  if (ready) {
    return (
      <div className="Weather">
        <h1> Check the forecast here👇</h1>
        <form>
          <div className="row">
            <div className="col-6">
              <input
                type="city"
                class="form-control"
                id="inputEmail4"
                placeholder="Enter city"
              ></input>
            </div>
            <div className="col-6">
              <button type="submit" class="button">
                Submit
              </button>
            </div>
          </div>
        </form>
        <div className="main-discription">
          <ul>
            <li>{weatherData.city}</li>
            <li> Friday, 19:00</li>
            <li>{weatherData.temperature}°C</li>
            <li className="text-capitalize">{weatherData.description}</li>
          </ul>
        </div>

        <div className="row">
          <div className="col-6">
            <ul>
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind: {weatherData.wind}km/hr</li>
              <li>Feels like: {weatherData.feels}° </li>
            </ul>
          </div>
          <div className="col-6">
            <ul>
              <li>Maximum Temperature: {weatherData.maxtemp}° </li>
              <li>Minimum Temeprature: {weatherData.mintemp}° </li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "26c70cc759f2dda82240508e33d14cb9";
    let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return "loading";
  }
}
