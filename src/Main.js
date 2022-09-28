import React, { useState } from "react";
import axios from "axios";
import { HashLoader } from "react-spinners";
import CurrentWeather from "./CurrentWeather";
import SetDate from "./SetDate";
import WeatherForecast from "./WeatherForecast";

export default function Main(props) {
  let [city, setCity] = useState("");
  let [weather, setWeather] = useState({});
  let [loaded, setLoaded] = useState(false);

  function changeCity(event) {
    event.preventDefault();
    setCity(event.target.value);
  }

  function handleChange(event) {
    event.preventDefault();
    let keyAPI = `e9f5a6b09cfb46c92f0a8f305e599284`;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city
      .trim()
      .toLowerCase()}&appid=${keyAPI}&units=metric`;
    axios.get(url).then(showWeather);
    console.log(url);
  }

  function showWeather(response) {
    setLoaded(true);
    setWeather({
      temperature: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed),
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      country: response.data.sys.country,
      city: response.data.name,
    });
    console.log(`City is ${weather.city}`);
  }

  function CurrentData() {
    return (
      <div>
        <div className="row current-data">
          <div className="col-sm-6 d-block text-start mt-3">
            <h5>
              {weather.city}, {weather.country}{" "}
            </h5>
            <div>{SetDate()}</div>
            <p className="description">{weather.description}</p>
          </div>
        </div>
      </div>
    );
  }

  if (loaded)
    return (
      <div>
        <div className="main-container">
          <form className="row" onSubmit={handleChange}>
            <input
              type="search"
              className="col-sm-8 input-form text-capitalize"
              placeholder="Type a city"
              onChange={changeCity}
            />
            <input
              type="submit"
              value="Search"
              className="btn btn-primary col-sm-3"
            />
          </form>
          <div className="weather-local"></div>
          <CurrentData />
          <CurrentWeather weather={weather} />
          <WeatherForecast />
        </div>

        <footer>
          <a
            href="https://github.com/elinalak/weather-react"
            target={"_blank"}
            rel="noreferrer"
          >
            Open-source
          </a>{" "}
          code by Viktoriia Lakida
        </footer>
      </div>
    );
  else
    return (
      <div>
        <div className="main-container">
          <form className="row" onSubmit={handleChange}>
            <input
              type="search"
              className="col-sm-8 input-form"
              placeholder="Type a city"
              onChange={changeCity}
            />
            <input
              type="submit"
              value="Search"
              className="btn btn-primary col-sm-3"
            />
          </form>
          <div className="weather-local">
            <h1 className="mt-3">Weather checker</h1>
            <h6>Do you know where your umbrella is? ⛱</h6>
            <HashLoader
              className="d-block m-auto mt-3"
              size={20}
              thickness={100}
              speed={100}
              color="lightblue"
            />
          </div>
        </div>
        <footer>
          {" "}
          <a
            className="text-decoration-none"
            href="https://github.com/elinalak/weather-react"
            target={"_blank"}
            rel="noreferrer"
          >
            Open-source
          </a>{" "}
          code by Viktoriia Lakida
        </footer>
      </div>
    );
}
