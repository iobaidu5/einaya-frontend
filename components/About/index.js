import React from "react";

const About = () => {
  return (
    <>
      <div className="about-style-2-area pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="single-about-2-content">
                <div className="section-title left-title">
                  <span className="top-title">About Us</span>
                  <h2>Save Up 50% On Your Life Insurance Policy</h2>
                  <p>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit. Exercitation veniam consequat sunt nostrud amet.
                  </p>
                </div>
                <div className="row justify-content-center">
                  <div className="col-lg-4 col-sm-4 col-md-4">
                    <div className="best-support-card">
                      <img
                        src="./assets/images/about/customer-service.svg"
                        alt="customer"
                      />
                      <h3>Best Support</h3>
                    </div>
                  </div>
                  <div className="col-lg-4 col-sm-4 col-md-4">
                    <div className="best-support-card card2">
                      <img src="./assets/images/about/agent.svg" alt="agent" />
                      <h3>Expert Agent</h3>
                    </div>
                  </div>
                  <div className="col-lg-4 col-sm-4 col-md-4">
                    <div className="best-support-card">
                      <img src="./assets/images/about/world.svg" alt="world" />
                      <h3>Best In World</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="img-style1">
                <img
                  src="./assets/images/about/1.svg"
                  alt="image"
                  className="about-two-shape--img"
                />
                                <img
                  src="./assets/images/about/logo.png"
                  alt="image"
                  className="about-two-shape--logo"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
