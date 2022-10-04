import React from "react";
import WeatherIcons from "./WeatherIcons";

export default function DayForecast(props) {
  function showMaxtemp() {
    let tempMax = Math.round(props.data.temp.max);
    return tempMax;
  }

  function showMintemp() {
    let tempMin = Math.round(props.data.temp.min);
    return tempMin;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div className="mt-3 ">
      <div className="col current-data weather-forecast container-fluid">
        <p>{day()}</p>
        <WeatherIcons code={props.data.weather[0].icon} />
        <p className="mt-3">
          <span className="font-weight-bold">{showMaxtemp()}°</span>{" "}
          {showMintemp()}°
        </p>
      </div>
    </div>
  );
}
