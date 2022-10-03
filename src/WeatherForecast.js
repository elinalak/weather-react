import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import WeatherIcons from "./WeatherIcons";

export default function WeatherForecast() {
  function DayForecast(props) {
    return (
      <div className="mt-3 ">
        <div className="col current-data weather-forecast container-fluid">
          <p>{props.time}</p>
          <WeatherIcons code="50d" />
          <p className="mt-3">
            <span className="font-weight-bold">{props.daytemp}°</span>{" "}
            {props.nighttemp}°
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="d-inline-flex day-container justify-content-center">
      <DayForecast time="15:00" daytemp={4} nighttemp={2} />
      <DayForecast time="18:00" daytemp={5} nighttemp={4} />
      <DayForecast time="21:00" daytemp={5} nighttemp={4} />
      <DayForecast time="00:00" daytemp={3} nighttemp={3} />
      <DayForecast time="03:00" daytemp={2} nighttemp={2} />
    </div>
  );
}
