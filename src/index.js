import React from "react";
import ReactDOM from "react-dom";
import "./style.scss";
import App from "./App";
import Banner from "./Components/Home-banner";
import NavBar from "./Components/Header-navigation";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Locations from "./Components/Locations";
import BMVUFooter from "./Components/Footer";

// import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
    <BMVUFooter />
  </React.StrictMode>,
  document.getElementById("root")
);
