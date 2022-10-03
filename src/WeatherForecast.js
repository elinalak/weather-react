import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import WeatherIcons from "./WeatherIcons";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(`Forecast` + response.data.daily);
  }

  let apiKey = "a5acb752426cd8188485c35694980e3a";
  // let apiKey = `835cbc4b0d85401d246a04e2ca3b0338`;
  let lon = props.coordinates.lon;
  let lat = props.coordinates.lat;
  console.log(lat);
  console.log(lon);
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);

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
