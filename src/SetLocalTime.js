import React from "react";

export default function SetLocalTime(props) {
  let data = new Date(props.info * 1000);
  let dataNew = data.getUTCHours() + props.timezone / 3600;
  if (dataNew >= 24) dataNew = dataNew - 24;
  if (dataNew < 0) dataNew = dataNew + 24;
  let hh = Math.trunc(dataNew);
  if (hh < 10) hh = `0${hh}`;
  let min = data.getMinutes();
  let fractions = dataNew - Math.trunc(dataNew);
  if (fractions > 0) min = min + 60 * fractions;

  if (min >= 60) {
    min = min - 60;
    hh = Math.trunc(dataNew) + 1;
    return (
      <span>
        {hh}:{min}{" "}
      </span>
    );
  }
  if (min < 10) min = `0${min}`;
  let time = `${hh}:${min}`;

  return <span>{time}</span>;
}
