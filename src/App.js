import React from "react";
import "./App.css";
import Weather from "./Weather";
export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />

        <footer>
          This poject is coded by{" "}
          <a href="https://ecstatic-bassi-280461.netlify.app/" target="_blank">
            Pratibha Tomar
          </a>{" "}
          and is open source on{" "}
          <a
            href="https://peaceful-poitras-26321d.netlify.app/"
            target="_blank"
          >
            GitHib
          </a>
        </footer>
      </div>
    </div>
  );
}
