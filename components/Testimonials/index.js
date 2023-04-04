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

const Testimonials = () => {

  const options = {
    margin: 10,
    responsiveClass: true,
    nav: true,
    dots: false,
    autoplay: false,
    smartSpeed: 1000,
    items: 1,
    responsive: {
        0: {
            items: 1,
        },
        400: {
            items: 1,
        },
        600: {
            items: 1,
        },
        700: {
            items: 1,
        },
        1000: {
            items: 1,

        }
    },
};

  return (
    <>
      <div className="testimonials-area testimonials-two-area pt-100 pb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="single-testimonials-img">
                <div className="testimonials-main">
                  <img
                    src="./assets/images/testimonials/testimonials-img-1.webp"
                    alt="testimonials1"
                  />
                </div>
                <div className="testimonials-bg-shape12">
                  <img
                    src="./assets/images/testimonials/testimonials-img-bg-shape1.webp"
                    alt="testimonials"
                  />
                </div>
                <div className="testimonials-img2">
                  <img
                    src="./assets/images/testimonials/testimonials-img-2.svg"
                    alt="testimonials2"
                  />
                </div>
                <div className="testimonials-img3">
                  <img
                    src="./assets/images/testimonials/testimonials-img-3.svg"
                    alt="testimonials2"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="single-testimonials-content">
                <div className="section-title left-title">
                  <span className="top-title">Testimonials</span>
                  <h2>What Our Customers Says</h2>
                  <p>
                    Facilis est et expedita distinctio. Nam libero tempore, cum
                    soluta nobis est eldi optio cumque nihil impedit quo minus
                    id quod maxime placeat facere.
                  </p>
                </div>
                  <OwlCarousel
                    className="owl-theme"
                    {...options}
                  >
                    <div className="testimonials-item">
                      <div className="testimonials-client d-flex align-items-center">
                        <img
                          src="./assets/images/testimonials/testimonials-img-4.svg"
                          alt="testimonials"
                        />
                        <div className="testimonials-text">
                          <h3>Frank Serbian</h3>
                          <p>Web Designer</p>
                        </div>
                      </div>
                      <div className="testimonials-card testimonials-card-two">
                        <div className="quote-icon">
                          <img src="./assets/images/quote-two.svg" alt="quote" />
                        </div>
                        <p>
                          Which is the same as saying through shrinking from
                          toil and pain is cases are perfectly simple and easy
                          to distinguish in a free hour whenour power of choice
                          is untrammelled and when nothing.
                        </p>
                      </div>
                    </div>
                    <div className="testimonials-item">
                      <div className="testimonials-client d-flex align-items-center">
                        <img
                           src="./assets/images/testimonials/testimonials-img-4.svg"
                          alt="testimonials"
                        />
                        <div className="testimonials-text">
                          <h3>Ash Wednesday</h3>
                          <p>Web Developer</p>
                        </div>
                      </div>
                      <div className="testimonials-card testimonials-card-two">
                        <div className="quote-icon">
                          <img src="./assets/images/quote-two.svg" alt="quote" />
                        </div>
                        <p>
                          Which is the same as saying through shrinking from
                          toil and pain is cases are perfectly simple and easy
                          to distinguish in a free hour whenour power of choice
                          is untrammelled and when nothing.
                        </p>
                      </div>
                    </div>
                    <div className="testimonials-item">
                      <div className="testimonials-client d-flex align-items-center">
                        <img
                           src="./assets/images/testimonials/testimonials-img-4.svg"
                          alt="testimonials"
                        />
                        <div className="testimonials-text">
                          <h3>Graham Cracker</h3>
                          <p>Founder</p>
                        </div>
                      </div>
                      <div className="testimonials-card testimonials-card-two">
                        <div className="quote-icon">
                          <img src="./assets/images/quote-two.svg" alt="quote" />
                        </div>
                        <p>
                          Which is the same as saying through shrinking from
                          toil and pain is cases are perfectly simple and easy
                          to distinguish in a free hour whenour power of choice
                          is untrammelled and when nothing.
                        </p>
                      </div>
                    </div>
                    <div className="testimonials-item">
                      <div className="testimonials-client d-flex align-items-center">
                        <img
                           src="./assets/images/testimonials/testimonials-img-4.svg"
                          alt="testimonials"
                        />
                        <div className="testimonials-text">
                          <h3>Graham Cracker</h3>
                          <p>Founder</p>
                        </div>
                      </div>
                      <div className="testimonials-card testimonials-card-two">
                        <div className="quote-icon">
                          <img src="./assets/images/quote-two.svg" alt="quote" />
                        </div>
                        <p>
                          Which is the same as saying through shrinking from
                          toil and pain is cases are perfectly simple and easy
                          to distinguish in a free hour whenour power of choice
                          is untrammelled and when nothing.
                        </p>
                      </div>
                    </div>
                  </OwlCarousel>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
