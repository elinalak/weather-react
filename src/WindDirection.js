import React from "react";

export default function WindDirection(props) {
  let windDirection = [
    { name: "N", dig: [350, 360, `010`] },
    { name: "N/NE", dig: [20, 30] },
    { name: "NE", dig: [40, 50] },
    { name: "E/NE", dig: [60, 70] },
    { name: "E", dig: [80, 90, 100] },
    { name: "E/SE", dig: [110, 120] },
    { name: "SE", dig: [130, 140] },
    { name: "S/SE", dig: [150, 160] },
    { name: "S", dig: [170, 180, 190] },
    { name: "S/SW", dig: [200, 210] },
    { name: "SW", dig: [220, 230] },
    { name: "W/SW", dig: [240, 250] },
    { name: "W", dig: [260, 270, 280] },
    { name: "W/NW", dig: [290, 300] },
    { name: "NW", dig: [310, 320] },
    { name: "N/NW", dig: [330, 340] },
  ];
  console.log(windDirection[0].name);
  let wind = Math.round(props.direction / 10) * 10;
  let direction = "no";

  windDirection.forEach((element) => {
    element.dig.forEach((dir) => {
      if (wind === dir) {
        console.log(element.name);
        direction = element.name;
        console.log(direction);
      }
    });
  });

  return (
    <p>
      Wind: {props.wind} km/h, {direction}
    </p>
  );
}
