import React from "react";
import "bootstrap/dist/css/bootstrap.css";

export default function WeatherForecast() {
  function DayForecast(props) {
    return (
      <div className="mt-3">
        <div className="col-xxl-2 current-data weather-forecast container-fluid">
          <p>{props.time}</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            className="bi bi-brightness-low-fill img-fluid "
            viewBox="0 0 16 16"
          >
            <path d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0zM8.5 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm0 11a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm5-5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm-11 0a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9.743-4.036a.5.5 0 1 1-.707-.707.5.5 0 0 1 .707.707zm-7.779 7.779a.5.5 0 1 1-.707-.707.5.5 0 0 1 .707.707zm7.072 0a.5.5 0 1 1 .707-.707.5.5 0 0 1-.707.707zM3.757 4.464a.5.5 0 1 1 .707-.707.5.5 0 0 1-.707.707z" />
          </svg>
          <p className="mt-3">
            <span className="font-weight-bold">{props.daytemp}°</span>{" "}
            {props.nighttemp}°
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="d-inline-flex day-container">
      <DayForecast time="15:00" daytemp={4} nighttemp={2} />
      <DayForecast time="18:00" daytemp={5} nighttemp={4} />
      <DayForecast time="21:00" daytemp={5} nighttemp={4} />
      <DayForecast time="00:00" daytemp={3} nighttemp={3} />
      <DayForecast time="03:00" daytemp={2} nighttemp={2} />
      <DayForecast time="06:00" daytemp={2} nighttemp={2} />
    </div>
  );
}
