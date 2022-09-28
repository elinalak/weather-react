import React from "react";
import SetDate from "./SetDate";
import weather from "./Main";

export default function CurrentData() {
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
