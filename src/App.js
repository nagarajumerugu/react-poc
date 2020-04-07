import React from "react";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div class="container pb-3">
          <nav class="navbar navbar-expand-lg navbar-light">
            <a class="navbar-brand header-logo" href="#">
              Navbar
            </a>
            <button
              class="navbar-toggler collapsed"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav ml-auto">
                <li class="nav-item active">
                  <a class="nav-link" href="#">
                    Home <span class="sr-only">(current)</span>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Get More Details
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Locations
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link disabled" href="#">
                    1(800) 555 5555
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default App;
