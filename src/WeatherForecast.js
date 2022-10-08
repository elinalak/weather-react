import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import DayForecast from "./DayForecast";
import axios from "axios";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);
  let [timezone, setTimezone] = useState(null);

  useEffect(() => {
    return () => {
      setLoaded(false);
    };
  }, [props.coordinates]);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setTimezone(response.data.timezone_offset);
    setLoaded(true);
  }

  if (loaded)
    return (
      <div className="d-inline-flex day-container justify-content-center">
        {/* eslint-disable */}
        {forecast.map(function (DailyForecast, index) {
          if (index < 5)
            return (
              <div key={index}>
                <DayForecast data={DailyForecast} timezone={timezone} />
              </div>
            );
        })}
      </div>
    );
  else {
    let apiKey = "a5acb752426cd8188485c35694980e3a";
    // let apiKey = `835cbc4b0d85401d246a04e2ca3b0338`;
    let lon = props.coordinates.lon;
    let lat = props.coordinates.lat;
    console.log(lat);
    console.log(lon);
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return null;
  }
}
