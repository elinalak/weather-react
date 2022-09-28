import React, { useState } from "react";
import axios from "axios";
import { HashLoader } from "react-spinners";
import CurrentWeather from "./CurrentWeather";
import CurrentData from "./CurrentData";
import WeatherForecast from "./WeatherForecast";
import Form from "./Form";
import Footer from "./Footer";

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

  if (loaded)
    return (
      <div>
        <div className="main-container">
          <Form handleChange={handleChange} changeCity={changeCity} />
          <div className="weather-local"></div>
          <CurrentData weather={weather} />
          <CurrentWeather weather={weather} />
          <WeatherForecast />
        </div>
        <Footer />
      </div>
    );
  else
    return (
      <div>
        <div className="main-container">
          <Form />
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
        <Footer />
      </div>
    );
}
