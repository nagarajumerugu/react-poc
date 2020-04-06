import React, { Component } from "react";
import Getmoredetails from "./Get-more-details";
import Banner from "./Home-banner";
import Locations from "./Locations";
import { Link } from "react-router-dom";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <Router>
        <div>
          <header class="main-header px-md-4 mb-4 mb-lg-5 mt-lg-2">
            <nav class="navbar navbar-expand-md navbar-light px-4 px-lg-0 mt-2 mt-lg-0">
              <a class="navbar-brand header-logo" ui-sref="home" href="#/home">
                <img class="d-lg-none" src="/Images/logo2.svg" alt="" />
                <img
                  class="d-none d-lg-block desktop-logo"
                  src="/Images/Logo1.svg"
                  alt=""
                />
              </a>
              <button
                class="navbar-toggler border-0 pr-0 collapsed"
                type="button"
                data-toggle="collapse"
                data-target="#toggleNavBar"
                aria-controls="toggleNavBar"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <div class="nav-icon">
                  <div></div>
                </div>
              </button>
              <div class="collapse navbar-collapse" id="toggleNavBar">
                <ul class="navbar-nav ml-auto">
                  <li class="nav-item">
                    <Link className="nav-link px-3 active" to="/Home-banner">
                      Home
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link className="nav-link px-3" to="/Get-more-details">
                      Get More Details
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link className="nav-link px-3" to="/Locations">
                      Locations
                    </Link>
                  </li>
                </ul>
                <div class="container d-md-none">
                  <div class="d-flex flex-column social-media">
                    <a
                      href="https://www.facebook.com/BanfieldPetHospital"
                      target="_blank"
                    >
                      <img src="/Images/Facebook.svg" alt="facebook" />
                    </a>
                    <a
                      href="https://www.www.instagram.com/banfieldpethospital"
                      target="_blank"
                    >
                      <img src="/Images/Instagram.svg" alt="instagram" />
                    </a>
                    <a href="https://www.twitter.com/Banfield" target="_blank">
                      <img src="/Images/Twitter.svg" alt="twitter" />
                    </a>
                    <a
                      href="https://www.youtube.com/BanfieldPetHospital"
                      target="_blank"
                    >
                      <img src="/Images/Youtube.svg" alt="youtube" />
                    </a>
                  </div>
                </div>
              </div>
            </nav>
          </header>
        </div>
        <Switch>
          <Route path="/Home-banner" component={Banner} />
          <Route path="/Get-more-details" component={Getmoredetails} />
          <Route path="/locations" component={Locations} />
          {/* <Route path="/searchdetails" component={SearchDetails} /> */}
          <Redirect to="/Home-banner" />
        </Switch>
      </Router>
    );
  }
}
export default NavBar;
