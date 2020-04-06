import React, { Component } from "react";

class Locations extends Component {
  render() {
    return (
      <div class="container  px-4 px-lg-3">
        <h3 class="text-dark pb-4 pb-lg-5 mb-4 border-bottom">
          Our mobile wellness clinic locations
        </h3>
        {/* <!-- ngRepeat: hospital in LC.locationsList --> */}
        <div
          class="pt-4 pb-5 py-lg-5 mb-4 border-bottom location-hldr ng-scope"
          ng-repeat="hospital in LC.locationsList"
        >
          <div>
            <a
              href="https://www.google.com/maps?daddr=244+Passaic+St+Garfield+NJ+07026"
              target="_blank"
            >
              <img class="img-fluid map" src="/Images/map_icon.jpg" alt="" />
            </a>
            <div class="d-flex align-items-start mb-3">
              <img class="img-fluid pr-2" src="/Images/Ic_Address.svg" alt="" />
              <p class="m-0 ng-binding">244 Passaic St, Garfield, NJ, 07026</p>
            </div>

            <div class="d-flex align-items-start mb-3">
              <img class="img-fluid pr-2" src="/Images/Ic_Clock.svg" alt="" />
              <p class="m-0 ng-binding">10 AM - 10 PM</p>
            </div>
            <div class="d-flex">
              <button
                class="btn btn-primary rounded-0 mt-3"
                ng-click="LC.scheduleAppointment(hospital)"
              >
                Schedule a Visit
              </button>
            </div>
          </div>
        </div>
        {/* <!-- end ngRepeat: hospital in LC.locationsList --> */}
        <div
          class="pt-4 pb-5 py-lg-5 mb-4 border-bottom location-hldr ng-scope"
          ng-repeat="hospital in LC.locationsList"
        >
          <div>
            <a
              href="https://www.google.com/maps?daddr=2885+E.+81st+Ave+Merrillville+IN+46410"
              target="_blank"
            >
              <img class="img-fluid map" src="/Images/map_icon.jpg" alt="" />
            </a>
            <div class="d-flex align-items-start mb-3">
              <img class="img-fluid pr-2" src="/Images/Ic_Address.svg" alt="" />
              <p class="m-0 ng-binding">
                2885 E. 81st Ave, Merrillville, IN, 46410
              </p>
            </div>

            <div class="d-flex align-items-start mb-3">
              <img class="img-fluid pr-2" src="/Images/Ic_Clock.svg" alt="" />
              <p class="m-0 ng-binding">9 AM - 9 PM</p>
            </div>
            <div class="d-flex">
              <button
                class="btn btn-primary rounded-0 mt-3"
                ng-click="LC.scheduleAppointment(hospital)"
              >
                Schedule a Visit
              </button>
            </div>
          </div>
        </div>
        {/* <!-- end ngRepeat: hospital in LC.locationsList --> */}
        <div
          class="pt-4 pb-5 py-lg-5 mb-4 border-bottom location-hldr ng-scope"
          ng-repeat="hospital in LC.locationsList"
        >
          <div>
            <a
              href="https://www.google.com/maps?daddr=2885+E.+81st+Ave+Merrillville+IN+46410"
              target="_blank"
            >
              <img class="img-fluid map" src="/Images/map_icon.jpg" alt="" />
            </a>
            <div class="d-flex align-items-start mb-3">
              <img class="img-fluid pr-2" src="/Images/Ic_Address.svg" alt="" />
              <p class="m-0 ng-binding">
                2885 E. 81st Ave, Merrillville, IN, 12345
              </p>
            </div>

            <div class="d-flex align-items-start mb-3">
              <img class="img-fluid pr-2" src="/Images/Ic_Clock.svg" alt="" />
              <p class="m-0 ng-binding">9 AM - 9 PM</p>
            </div>
            <div class="d-flex">
              <button
                class="btn btn-primary rounded-0 mt-3"
                ng-click="LC.scheduleAppointment(hospital)"
              >
                Schedule a Visit
              </button>
            </div>
          </div>
        </div>
        {/* <!-- end ngRepeat: hospital in LC.locationsList --> */}
        <div
          class="pt-4 pb-5 py-lg-5 mb-4 border-bottom location-hldr ng-scope"
          ng-repeat="hospital in LC.locationsList"
        >
          <div>
            <a
              href="https://www.google.com/maps?daddr=2885+E.+81st+Ave+Merrillville+IN+46410"
              target="_blank"
            >
              <img class="img-fluid map" src="/Images/map_icon.jpg" alt="" />
            </a>
            <div class="d-flex align-items-start mb-3">
              <img class="img-fluid pr-2" src="/Images/Ic_Address.svg" alt="" />
              <p class="m-0 ng-binding">
                2885 E. 81st Ave, Merrillville, IN, 67899
              </p>
            </div>

            <div class="d-flex align-items-start mb-3">
              <img class="img-fluid pr-2" src="/Images/Ic_Clock.svg" alt="" />
              <p class="m-0 ng-binding">9 AM - 9 PM</p>
            </div>
            <div class="d-flex">
              <button
                class="btn btn-primary rounded-0 mt-3"
                ng-click="LC.scheduleAppointment(hospital)"
              >
                Schedule a Visit
              </button>
            </div>
          </div>
        </div>
        {/* <!-- end ngRepeat: hospital in LC.locationsList --> */}
        <h3 class="text-dark py-4 mb-5">More locations coming soon</h3>
      </div>
    );
  }
}
export default Locations;
