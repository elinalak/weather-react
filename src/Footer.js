import React from "react";
import "bootstrap/dist/css/bootstrap.css";

export default function Footer() {
  return (
    <footer>
      <a
        href="https://github.com/elinalak/weather-react"
        target={"_blank"}
        rel="noreferrer"
        className="text-decoration-none"
      >
        Open-source
      </a>{" "}
      app coded by{" "}
      <a
        href="https://startling-blini-e759e3.netlify.app"
        rel="noreferrer"
        target={"_blank"}
        className="text-decoration-none"
      >
        Viktoriia Lakida
      </a>
    </footer>
  );
}
