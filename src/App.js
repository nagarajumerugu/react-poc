import React from "react";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header class="main-header px-md-4 mb-4 mb-lg-5 mt-lg-2">
        <nav class="navbar navbar-expand-md navbar-light px-4 px-lg-0 mt-2 mt-lg-0">
          <a class="navbar-brand header-logo" ui-sref="home" href="#/home">
            <img class="d-lg-none" src="/Content/Images/logo2.svg" alt="" />
            <img
              class="d-none d-lg-block desktop-logo"
              src="./scss/assets/imgs/Logo1.png"
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
                <a
                  class="nav-link px-3 active"
                  ui-sref="home"
                  ui-sref-active="active"
                  href="#/home"
                >
                  Home{" "}
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link px-3"
                  ui-sref="getMoreDetails"
                  ui-sref-active="active"
                  href="#/getMoreDetails"
                >
                  Get More Details
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link px-3"
                  ui-sref="locations"
                  ui-sref-active="active"
                  href="#/locations"
                >
                  Locations
                </a>
              </li>
            </ul>
            <div class="container d-md-none">
              <div class="d-flex flex-column social-media">
                <a
                  href="https://www.facebook.com/BanfieldPetHospital"
                  target="_blank"
                >
                  <img src="/Content/Images/Facebook.svg" alt="facebook" />
                </a>
                <a
                  href="https://www.www.instagram.com/banfieldpethospital"
                  target="_blank"
                >
                  <img src="/Content/Images/Instagram.svg" alt="instagram" />
                </a>
                <a href="https://www.twitter.com/Banfield" target="_blank">
                  <img src="/Content/Images/Twitter.svg" alt="twitter" />
                </a>
                <a
                  href="https://www.youtube.com/BanfieldPetHospital"
                  target="_blank"
                >
                  <img src="/Content/Images/Youtube.svg" alt="youtube" />
                </a>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default App;
