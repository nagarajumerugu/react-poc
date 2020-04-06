import React, { Component } from "react";

class BMVUFooter extends Component {
  render() {
    return (
      <div>
        <footer class="py-5 px-md-4 bg-light main-footer">
          <div class="px-4 mb-4 px-lg-4 social-media">
            <a
              class="media M-fb"
              target="_blank"
              href="https://www.facebook.com/BanfieldPetHospital"
            ></a>
            <a
              class="media M-inst"
              target="_blank"
              href=" http://instagram.com/banfieldpethospital"
            ></a>
            <a
              class="media M-tw"
              target="_blank"
              href="http://twitter.com/Banfield"
            ></a>
            <a
              class="media M-utub"
              target="_blank"
              href="http://www.youtube.com/user/BanfieldPetHospital"
            ></a>
          </div>

          {/* <!-- Footer Links --> */}
          <div class="text-center text-md-left px-lg-4">
            <div class="d-flex flex-column text-left flex-md-row">
              <div class="px-4 col-md-4 d-md-flex justify-content-md-between pl-lg-0">
                <ul class="list-group flex-fill">
                  <li class="list-group-item px-0">
                    <a href="https://www.banfield.com/" target="_blank">
                      Banfield.com
                    </a>
                    <span class="fas fa-chevron-right float-right d-md-none"></span>
                  </li>
                  <li class="list-group-item px-0">
                    <a
                      href="https://www.banfield.com/our-hospitals"
                      target="_blank"
                    >
                      Our Hospitals
                    </a>
                    <span class="fas fa-chevron-right float-right d-md-none"></span>
                  </li>
                </ul>
                <ul class="list-group flex-fill">
                  <li class="list-group-item px-0">
                    <a
                      class="footer-a-link"
                      target="_blank"
                      href="https://www.banfield.com/about-us/contact-us"
                    >
                      Contact Us
                    </a>
                    <span class="fas fa-chevron-right float-right d-md-none"></span>
                  </li>
                  <li class="list-group-item px-0">
                    <a
                      class="footer-a-link"
                      target="_blank"
                      href="https://www.banfield.com/about-us"
                    >
                      About Us
                    </a>
                    <span class="fas fa-chevron-right float-right d-md-none"></span>
                  </li>
                </ul>
              </div>
              <div class="px-4 col-md-4 d-md-flex justify-content-md-between">
                <ul class="list-group flex-fill">
                  <li class="list-group-item px-0">
                    <a
                      class="footer-a-link"
                      target="_blank"
                      href="https://www.banfield.com/privacy"
                    >
                      Privacy
                    </a>
                    <span class="fas fa-chevron-right float-right d-md-none"></span>
                  </li>
                  <li class="list-group-item px-0">
                    <a
                      class="footer-a-link"
                      target="_blank"
                      href="https://www.mars.com/global/accessibility"
                    >
                      Accessibility
                    </a>
                    <span class="fas fa-chevron-right float-right d-md-none"></span>
                  </li>
                </ul>
                <ul class="list-group flex-fill">
                  <li class="list-group-item px-0">
                    <a
                      class="footer-a-link"
                      target="_blank"
                      href="http://www.mars.com/global/home"
                    >
                      MARS
                    </a>
                    <span class="fas fa-chevron-right float-right d-md-none"></span>
                  </li>
                  <li class="list-group-item px-0">
                    <a
                      class="footer-a-link"
                      target="_blank"
                      href="https://www.mars.com/global/policies/adchoices-en"
                    >
                      AdChoices
                    </a>
                    <span class="fas fa-chevron-right float-right d-md-none"></span>
                  </li>
                </ul>
              </div>
              <div class="px-4 col-md-4 d-md-flex justify-content-md-between">
                <ul class="list-group flex-fill">
                  <li class="list-group-item px-0">
                    <a
                      class="footer-a-link"
                      target="_blank"
                      href="https://www.banfield.com/preventive-care/banfield-prevention"
                    >
                      Pet Healthcare Resources
                    </a>
                    <span class="fas fa-chevron-right float-right d-md-none"></span>
                  </li>
                  <li class="list-group-item px-0">
                    <a
                      class="footer-a-link"
                      target="_blank"
                      href="https://www.banfield.com/terms"
                    >
                      Terms
                    </a>
                    <span class="fas fa-chevron-right float-right d-md-none"></span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* <!-- Footer Links --> */}
        </footer>
      </div>
    );
  }
}
export default BMVUFooter;
