import React from "react";
var $ = require("jquery");
if (typeof window !== "undefined") {
   window.$ = window.jQuery = require("jquery");
}
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import dynamic from "next/dynamic";
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});

const Partners = () => {

  return (
    <>
      {/* Start Panther Area  */}
      <div className="panther-two-area pb-100">
        <div className="container">
          <div className="panther-item">
            <div className="panther-content d-flex align-items-center justify-content-center">
              Trusted By Over
              <h2>
                <span className="odometer" data-count="35,857">
                  {" "}
                  35,857{" "}
                </span>
                <span className="target">+</span>
              </h2>
              Happy Customers Including
            </div>
            <div className="panther-slider-two">
              <OwlCarousel className="owl-theme" loop margin={10} nav items={5} dots={false} autoplay={true} arrow={false} >
                <div className="panther-logo">
                  <img
                    src="./assets/images/pantner/pantner-logo-1.svg"
                    alt="panther-logo"
                  />
                </div>
                <div className="panther-logo">
                  <img
                    src="./assets/images/pantner/pantner-logo-2.svg"
                    alt="panther-logo"
                  />
                </div>
                <div className="panther-logo">
                  <img
                    src="./assets/images/pantner/pantner-logo-3.svg"
                    alt="panther-logo"
                  />
                </div>
                <div className="panther-logo">
                  <img
                    src="./assets/images/pantner/pantner-logo-4.svg"
                    alt="panther-logo"
                  />
                </div>
                <div className="panther-logo">
                  <img
                    src="./assets/images/pantner/pantner-logo-5.svg"
                    alt="panther-logo"
                  />
                </div>
                <div className="panther-logo">
                  <img
                    src="./assets/images/pantner/pantner-logo-1.svg"
                    alt="panther-logo"
                  />
                </div>
                <div className="panther-logo">
                  <img
                    src="./assets/images/pantner/pantner-logo-2.svg"
                    alt="panther-logo"
                  />
                </div>
                <div className="panther-logo">
                  <img
                    src="./assets/images/pantner/pantner-logo-3.svg"
                    alt="panther-logo"
                  />
                </div>
                <div className="panther-logo">
                  <img
                    src="./assets/images/pantner/pantner-logo-4.svg"
                    alt="panther-logo"
                  />
                </div>
                <div className="panther-logo">
                  <img
                    src="./assets/images/pantner/pantner-logo-5.svg"
                    alt="panther-logo"
                  />
                </div>
              </OwlCarousel>
            </div>
          </div>
        </div>
      </div>
      {/* End Panther Area */}
    </>
  );
};

export default Partners;
