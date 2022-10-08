import React from "react";

export default function SetLocalTime(props) {
  let data = new Date(props.info * 1000);
  let dataNew = data.getUTCHours() + props.timezone / 3600;
  if (dataNew >= 24) dataNew = dataNew - 24;
  if (dataNew < 0) dataNew = dataNew + 24;
  let hh = dataNew;
  if (hh < 10) hh = `0${hh}`;
  let min = data.getMinutes();
  if (min < 10) min = `0${min}`;
  let time = `${hh}:${min}`;
  return time;
}
