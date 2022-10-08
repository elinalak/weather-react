import React, { useState } from "react";
import axios from "axios";
import { HashLoader } from "react-spinners";
import WeatherForecast from "./WeatherForecast";
import "bootstrap/dist/css/bootstrap.css";
import WeatherInfo from "./WeatherInfo";

export default function Main(props) {
  let [city, setCity] = useState(props.cityDefault);
  let [weather, setWeather] = useState({ ready: false });

  function handleSubmit(event) {
    event.preventDefault();
    handleChange();
  }
  function handleChangeCity(event) {
    setCity(event.target.value);
  }

  function handleChange() {
    let keyAPI = `835cbc4b0d85401d246a04e2ca3b0338`;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city
      .trim()
      .toLowerCase()}&appid=${keyAPI}&units=metric`;
    axios.get(url).then(showWeather);
    console.log(`Function is here`, url);
  }

  function showWeather(response) {
    setWeather({
      ready: true,
      coordinates: response.data.coord,
      temperature: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed),
      icon: response.data.weather[0].icon,
      country: response.data.sys.country,
      city: response.data.name,
      timezone: response.data.timezone,
    });
    console.log(`City is ${weather.city}`);
  }

  if (weather.ready)
    return (
      <div>
        <div className="main-container">
          <form className="row" onSubmit={handleSubmit}>
            <input
              type="search"
              className="col-sm-8 input-form text-capitalize"
              placeholder="Type a city"
              autoFocus="on"
              onChange={handleChangeCity}
            />
            <input
              type="submit"
              value="Search"
              className="btn btn-success col-sm-3"
            />
          </form>
          <div className="weather-local"></div>
          <WeatherInfo weather={weather} />
          <WeatherForecast coordinates={weather.coordinates} />
        </div>
      </div>
    );
  else handleChange();
  return (
    <div>
      <div className="main-container">
        <form className="row" onSubmit={handleSubmit}>
          <input
            type="search"
            className="col-sm-8 input-form text-capitalize"
            placeholder="Type a city"
            autoFocus="on"
            onChange={handleChangeCity}
          />
          <input
            type="submit"
            value="Search"
            className="btn btn-success col-sm-3"
          />
        </form>
        <h1 className="mt-3">Weather checker</h1>
        <h6>Loading... ⛱</h6>
        <HashLoader
          className="d-block m-auto mt-3"
          size={20}
          thickness={100}
          speed={100}
          color="lightblue"
        />
      </div>
    </div>
  );
}
