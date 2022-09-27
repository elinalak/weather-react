import React from "react";

export default function CurrentWeather(weather) {
  return (
    <div className="row current-weather">
      <div className="col-sm-6">
        <div className="row">
          <div className="col-sm-6 current-icon img-fluid ">
            <img src={weather.icon} alt={weather.description} />
          </div>
          <div className="col-sm-6 current-temperature">
            <span className="Temperature" id="temperature">
              {weather.temperature}
            </span>{" "}
            <span className="metrics">
              <a href="/" id="celsius-link" className="text-decoration-none">
                °C
              </a>
              |{" "}
              <a href="/" id="farenheit-link" className="text-decoration-none">
                °F
              </a>
            </span>
          </div>
        </div>
      </div>
      <div className="col-sm-6 current-data mt-4">
        <p>Humidity: {weather.humidity}%</p>
        <p>Wind: {weather.wind} km/h</p>
      </div>
    </div>
  );
}
