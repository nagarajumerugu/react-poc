import React from "react";
import ReactDOM from "react-dom";
import "./style.scss";
import App from "./App";
import Getmoredetails from "./Components/Get-more-details";

// import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Getmoredetails />
  </React.StrictMode>,
  document.getElementById("root")
);
