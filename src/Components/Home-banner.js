import React, { Component } from "react";

class Banner extends Component {
  render() {
    return (
      <div>
        <section class="hero ng-scope">
          <div class="container px-4">
            <div class="row align-items-center">
              <div class="col-md-6 col-lg-4">
                <div class="content">
                  <h1 class="mb-3">
                    <span class="text-dark d-block">Great pet care,</span>
                    <span class="text-dark d-block">right here in your</span>
                    <span class="d-block">neighborhood</span>
                  </h1>

                  <p class="d-md-none">
                    We’re heading your way.
                    <br /> Bring your pet, we’ll see you soon.
                  </p>
                  <p class="d-none d-md-block">
                    We’re heading your way. Bring <br />
                    your pet, we’ll see you soon.
                  </p>
                  <div class="d-none d-md-block mt-5">
                    <button
                      class="btn btn-primary rounded-0"
                      ui-sref="search"
                      href="#/search"
                    >
                      Schedule a visit
                    </button>
                  </div>
                </div>
              </div>
              <div class="col-md-6 col-lg-8">
                <img
                  src="/Images/vanImageDesktop.jpg"
                  class="w-100"
                  alt="Responsive image"
                />
                <div class="d-md-none mb-5">
                  <button
                    class="btn btn-primary rounded-0"
                    ui-sref="search"
                    href="#/search"
                  >
                    Schedule a visit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="pb-5 mb-5 ng-scope">
          <div class="container">
            <a
              class="d-flex flex-column justify-content-center align-items-center text-dark"
              href="#why-choose-banfield-express"
              du-smooth-scroll=""
            >
              <img class="scroll-icon" src="/Images/ScrollArrow.svg" alt="" />
            </a>
          </div>
        </section>
        <section
          class="bg-light why-choose-banner ng-scope"
          id="why-choose-banfield-express"
        >
          <div class="container py-5 arrow-down position-relative">
            <div class="row justify-content-center">
              <h1 class="d-flex flex-column d-md-block text-center text-dark">
                <span> Why choose </span> <span>mobile wellness clinics</span>
              </h1>
            </div>
          </div>
        </section>
        <section class="ng-scope">
          <div class="container">
            <div class="row align-items-center home-dotted-bg home-dotted-bg-one">
              <div class="col-md-6">
                <figure class="px-4 px-md-0">
                  <img
                    src="/Images/Image_1_ConvenientDesktop.jpg"
                    class="w-100"
                    alt="Responsive image"
                  />
                </figure>
              </div>
              <div class="offset-md-1 col-md-4">
                <div class="content pl-2 pl-lg-0">
                  <h1>convenient</h1>
                  <p>
                    Easy-to-find mobile locations,
                    <br /> easy to schedule.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="ng-scope">
          <div class="container">
            <div class="row flex-md-row-reverse align-items-center home-dotted-bg home-dotted-bg-two">
              <div class="offset-md-1 col-md-6">
                <figure class="px-4 px-md-0">
                  <img
                    src="/Images/Image_2_FastDesktop.jpg"
                    class="w-100"
                    alt="Responsive image"
                  />
                </figure>
              </div>
              <div class="offset-md-1 col-md-4">
                <div class="content pl-2 pl-lg-0">
                  <h1>quick </h1>
                  <p>
                    Got 15 minutes? Get great pet care
                    <br /> and be on your way.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div class="container pb-5 mb-5 ng-scope">
          <div class="row align-items-center">
            <div class="col-md-6">
              <figure class="px-4 px-md-0">
                <img
                  src="/Images/Image-3_CommittedDesktop.jpg"
                  class="w-100"
                  alt="Responsive image"
                />
              </figure>
            </div>
            <div class="offset-md-1 col-md-4">
              <div class="content pl-2 pl-lg-0">
                <h1>committed</h1>
                <p>
                  Our licensed veterinarians love your
                  <br /> pet almost as much as you do.
                </p>
              </div>
            </div>
          </div>
        </div>

        <section class="key-services-hldr bg-light pb-4 ng-scope">
          {/* <!-- key services offered --> */}
          <div class="py-5 ng-scope">
            <h1 class="text-center mt-3 mb-5 text-dark">
              Key Services Offered
            </h1>
            <div class="container px-4">
              <div class="row">
                <div class="offset-md-2 col-md-8">
                  <div class="row text-center">
                    <div class="col-6 col-lg-3 px-3 my-3">
                      <div class="key-services-icon-hldr h-100 bg-white w-100 d-flex flex-column">
                        <figure class="d-flex justify-content-center align-items-center">
                          <img src="/Images/Ic_Vaccinations.svg" alt="" />
                        </figure>
                        <p class="flex-fill">Vaccinations</p>
                      </div>
                    </div>
                    <div class="col-6 col-lg-3 px-3 my-3">
                      <div class="key-services-icon-hldr h-100 bg-white w-100 d-flex flex-column">
                        <figure class="d-flex justify-content-center align-items-center">
                          <img src="/Images/Ic_Deworming.svg" alt="" />
                        </figure>
                        <p class="flex-fill">Deworming</p>
                      </div>
                    </div>
                    <div class="col-6 col-lg-3 px-3 my-3">
                      <div class="key-services-icon-hldr h-100 bg-white w-100 d-flex flex-column">
                        <figure class="d-flex justify-content-center align-items-center">
                          <img src="/Images/Ic_Microscope.svg" alt="" />
                        </figure>
                        <p class="flex-fill">
                          Canine heartworm and feline FIV/FeLV combo tests
                        </p>
                      </div>
                    </div>
                    <div class="col-6 col-lg-3 px-3 my-3">
                      <div class="key-services-icon-hldr h-100 bg-white w-100 d-flex flex-column">
                        <figure class="d-flex justify-content-center align-items-center">
                          <img src="/Images/Ic_Heartworm.svg" alt="" />
                        </figure>
                        <p class="flex-fill">Heartworm protection</p>
                      </div>
                    </div>
                    <div class="col-6 col-lg-3 px-3 my-3">
                      <div class="key-services-icon-hldr h-100 bg-white w-100 d-flex flex-column">
                        <figure class="d-flex justify-content-center align-items-center">
                          <img src="/Images/Ic_Flea_Tick.svg" alt="" />
                        </figure>
                        <p class="flex-fill">
                          Veterinarian- approved flea/tick protection
                        </p>
                      </div>
                    </div>
                    <div class="col-6 col-lg-3 px-3 my-3">
                      <div class="key-services-icon-hldr h-100 bg-white w-100 d-flex flex-column">
                        <figure class="d-flex justify-content-center align-items-center">
                          <img src="/Images/Ic_Microchipping.svg" alt="" />
                        </figure>
                        <p class="flex-fill">Microchipping</p>
                      </div>
                    </div>
                    <div class="col-6 col-lg-3 px-3 my-3">
                      <div class="key-services-icon-hldr h-100 bg-white w-100 d-flex flex-column">
                        <figure class="d-flex justify-content-center align-items-center">
                          <img src="/Images/Ic_Nail_trims.svg" alt="" />
                        </figure>
                        <p class="flex-fill">
                          Nail trims and anal gland expressions
                        </p>
                      </div>
                    </div>
                    <div class="col-6 col-lg-3 px-3 my-3">
                      <div class="key-services-icon-hldr h-100 bg-white w-100 d-flex flex-column">
                        <figure class="d-flex justify-content-center align-items-center">
                          <img src="/Images/Ic_Certificates.svg" alt="" />
                        </figure>
                        <p class="flex-fill">Interstate Health Certificates</p>
                      </div>
                    </div>
                  </div>
                  <div class="mt-3 mb-lg-5">
                    <a
                      href="#/getMoreDetails"
                      class="text-dark txt-hover"
                      ui-sref="getMoreDetails"
                    >
                      View full list of services{" "}
                      <span class="fas fa-chevron-right pl-2 text-primary"></span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div class="container search-bar-hldr ng-scope">
          <div class="row">
            <div class="col"></div>
            <div class="px-4 px-lg-3 col-lg-7">
              <h1 class="text-dark">
                See if we’re in your{" "}
                <span class="text-primary">neighborhood</span>
              </h1>
              <search-directive class="ng-isolate-scope">
                <form class="serach_directive ng-pristine ng-valid ng-valid-maxlength">
                  <div class="input-group mt-4">
                    <input
                      class="form-control py-2 border-right-0 border rounded-0 clear ng-pristine ng-untouched ng-valid ng-valid-maxlength"
                      type="text"
                      ng-keypress="($event.charCode==13)? searchHospltal(inputText) : return "
                      placeholder="enter zip code"
                      numbers-only=""
                      maxlength="5"
                      ng-model="inputText"
                    />
                    <span class="input-group-append">
                      <a
                        href="javascript:void(0);"
                        class="input-group-text bg-transparent border-left-0 rounded-0"
                        ng-click="searchHospltal(inputText);"
                      ></a>
                    </span>
                  </div>
                  <div class="d-md-none search_page_btn mt-5">
                    <div>
                      <div class="button-container">
                        <button
                          ng-click="searchHospltal(inputText);"
                          type="button"
                          name="button"
                          class="btn btn-primary see-full-list-of-locations border-0 rounded-0 w-100"
                        >
                          Enter
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </search-directive>
            </div>
            <div class="col"></div>
          </div>
        </div>
      </div>
    );
  }
}
export default Banner;
