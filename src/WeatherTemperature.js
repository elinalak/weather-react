import React, { useState } from "react";

export default function WeatherTemperature(props) {
  let [metric, setMetric] = useState("celsius");

  function showFarenheit(event) {
    event.preventDefault();
    setMetric("farenheit");
    let item = document.querySelectorAll(".temperature");
    console.log(`For faren ${item[0].innerHTML}`);
    item.forEach((element) => {
      let faren = (element.innerHTML * 9) / 5 + 32;
      console.log(faren);
      element.innerHTML = Math.round(`${faren}`);
    });
  }

  function showCelsius(event) {
    event.preventDefault();
    setMetric("celsius");
    let item = document.querySelectorAll(".temperature");
    console.log(`For faren ${item[0].innerHTML}`);
    item.forEach((el) => {
      let cels = ((el.innerHTML - 32) * 5) / 9;
      console.log(cels);
      el.innerHTML = Math.round(`${cels}`);
    });
  }

  function calcFarenheit() {
    let farenheit = Math.round((props.celsius * 9) / 5 + 32);

    return farenheit;
  }

  if (metric === "celsius")
    return (
      <div className="col-sm-6 current-temperature">
        <span className="Temperature" id="temperature">
          {props.celsius}
        </span>{" "}
        <span className="metrics">
          <span>°C</span> |{" "}
          <a
            href="/"
            id="farenheit-link"
            className="text-decoration-none"
            onClick={showFarenheit}
          >
            °F
          </a>
        </span>
      </div>
    );
  else {
    return (
      <div className="col-sm-6 current-temperature">
        <span className="Temperature" id="temperature">
          {calcFarenheit()}
        </span>{" "}
        <span className="metrics">
          <a
            href="/"
            id="celsius-link"
            className="text-decoration-none"
            onClick={showCelsius}
          >
            °C
          </a>{" "}
          | <span>°F</span>
        </span>
      </div>
    );
  }
}
