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

const Team = () => {

  const options = {
    margin: 10,
    responsiveClass: true,
    nav: true,
    dots: false,
    autoplay: false,
    smartSpeed: 1000,
    responsive: {
        0: {
            items: 1,
        },
        400: {
            items: 1,
        },
        600: {
            items: 2,
        },
        700: {
            items: 2,
        },
        1000: {
            items: 3,

        }
    },
};

  return (
    <>
      <div className="team-area pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <span className="top-title">Our Team</span>
            <h2>Meet Our Great Team</h2>
          </div>
          <div className="">
            <OwlCarousel
              className="owl-theme"
              {...options}
            >
              <div className="single-team-card">
                <div className="team-img">
                  <img src="assets/images/taem/taem-1.webp" alt="team" />
                </div>
                <div className="single-team-content">
                  <h3>Graham Cracker</h3>
                  <p>Manager</p>
                </div>
              </div>
              <div className="single-team-card">
                <div className="team-img">
                  <img src="assets/images/taem/taem-2.webp" alt="team" />
                </div>
                <div className="single-team-content">
                  <h3>Frank Serbian</h3>
                  <p>Web Design</p>
                </div>
              </div>
              <div className="single-team-card">
                <div className="team-img">
                  <img src="assets/images/taem/taem-3.webp" alt="team" />
                </div>
                <div className="single-team-content">
                  <h3>Ash Wednesday</h3>
                  <p>Web Developer</p>
                </div>
              </div>
              <div className="single-team-card">
                <div className="team-img">
                  <img src="assets/images/taem/taem-1.webp" alt="team" />
                </div>
                <div className="single-team-content">
                  <h3>Graham Cracker</h3>
                  <p>Manager</p>
                </div>
              </div>
              <div className="single-team-card">
                <div className="team-img">
                  <img src="assets/images/taem/taem-2.webp" alt="team" />
                </div>
                <div className="single-team-content">
                  <h3>Frank Serbian</h3>
                  <p>Web Design</p>
                </div>
              </div>
              <div className="single-team-card">
                <div className="team-img">
                  <img src="assets/images/taem/taem-3.webp" alt="team" />
                </div>
                <div className="single-team-content">
                  <h3>Ash Wednesday</h3>
                  <p>Web Developer</p>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
