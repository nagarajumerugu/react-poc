import React from "react";

import "./App.css";
import NavBar from "./Components/Header-navigation";
import Getmoredetails from "./Components/Get-more-details";
import Banner from "./Components/Home-banner";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavBar />
    </div>
  );
}

export default App;
