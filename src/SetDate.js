import React from "react";

export default function SetDate() {
  let data = new Date();
  let day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let hh = data.getHours();
  if (hh < 10) hh = `0${hh}`;
  let min = data.getMinutes();
  if (min < 10) min = `0${min}`;
  let time = `${hh}:${min}`;
  let currentdate = `${day[data.getDay()]} ${time}`;
  console.log(currentdate);

  let yyyy = data.getFullYear();
  let mm = data.getMonth() + 1;
  let dd = data.getDate();
  if (dd < 10) dd = `0${dd}`;
  if (mm < 10) mm = `0${mm}`;
  console.log(`${dd}/${mm}/${yyyy}`);

  return (
    <div>
      <p>Last updated: {currentdate}</p>
      <p>
        {dd}/{mm}/{yyyy}
      </p>
    </div>
  );
}
