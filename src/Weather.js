import React from "react";
import "./Weather.css";
export default function Weather() {
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
          <li>Frankfurt am Main, Germany</li>
          <li>6° C</li>
          <li>Mostly Cloudy</li>
        </ul>
      </div>

      <div className="row">
        <div className="col-6">
          <ul>
            <li>Humidity: 86%</li>
            <li>Precipitation: 1,5mm</li>
            <li>Wind: 8 km/hr</li>
          </ul>
        </div>
        <div className="col-6">
          <ul>
            <li>Feels like: 3° </li>
            <li>Air Quality: Moderate</li>
            <li>Chance of Rain: 40%</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
