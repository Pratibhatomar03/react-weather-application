import React from "react";
import "./App.css";
import Weather from "./Weather";
export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Berlin" />
        <footer>
          Coded by{" "}
          <a href="https://ecstatic-bassi-280461.netlify.app/" target="_blank">
            Pratibha Tomar,
          </a>{" "}
          open source on{" "}
          <a
            href="https://github.com/Pratibhatomar03/react-weather-application"
            target="_blank"
          >
            GitHib,
          </a>
          and hosted on{" "}
          <a
            href="https://peaceful-poitras-26321d.netlify.app/"
            target="_blank"
          >
            Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
