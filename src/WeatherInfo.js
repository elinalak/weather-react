import React from "react";
import SetDate from "./SetDate";

export default function WeatherInfo(props) {
  return (
    <div>
      <div className="row current-data">
        <div className="col-sm-6 d-block text-start mt-3">
          <h5>
            {props.weather.city}, {props.weather.country}
          </h5>
          <div>{SetDate()}</div>
          <p className="description">{props.weather.description}</p>
        </div>
      </div>

      <div className="row current-weather">
        <div className="col-sm-6">
          <div className="row">
            <div className="col-sm-6 current-icon img-fluid ">
              <img src={props.weather.icon} alt={props.weather.description} />
            </div>
            <div className="col-sm-6 current-temperature">
              <span className="Temperature" id="temperature">
                {props.weather.temperature}
              </span>{" "}
              <span className="metrics">
                <a href="/" id="celsius-link" className="text-decoration-none">
                  °C
                </a>
                |{" "}
                <a
                  href="/"
                  id="farenheit-link"
                  className="text-decoration-none"
                >
                  °F
                </a>
              </span>
            </div>
          </div>
        </div>
        <div className="col-sm-6 current-data mt-4">
          <p>Humidity: {props.weather.humidity}%</p>
          <p>Wind: {props.weather.wind} km/h</p>
        </div>
      </div>
    </div>
  );
}
