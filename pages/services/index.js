import React, { useEffect } from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import { withAuth } from '../../customHooks/withAuth';

const Services = () => {
  const { user } = useSelector((state) => state.user);


  useEffect(() => {
    var nav = document.getElementById("navbarNav");
    var nav2 = document.getElementById("nav-2");
    var btn = document.getElementById("navbarBtn");
    nav?.classList?.remove("show");
    btn?.classList?.add("collapsed");
    nav2?.classList?.remove("active");
  }, [])

  
  return (
    <>
            <div className="page-banner-area">
            <div className="container">
                <div className="single-page-banner-content">
                    <h1>Services</h1>
                </div>
            </div>
        </div>
      <div className="services-three-area pt-100 pb-100">
        <div className="container">
          <div className="section-title">
            <span className="top-title">Our Services</span>
            <h2>Einaya Best Insurance Services</h2>
          </div>
          <div className="row">
            <div className="col-lg-4 col-sm-6 col-md-6">
              <div className="services-three-card services-page-card">
                <div className="services-card d-flex align-items-center">
                  <div className="services-icon">
                    <img src="assets/images/services/couple.svg" alt="couple" />
                  </div>
                  <h3>
                    <a href="services-details.html">Life Insurance</a>
                  </h3>
                </div>
                <p>
                  Nsectetur adipiscing elit, sed do eiusmod to incididunt ut
                  labore et dolore magna aliqtirt enim ad minim veniam,
                  quisexercitation.
                </p>
                <Link href="/insurers-partners">
                   <span className="default-btn">Read More</span>
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 col-md-6">
              <div className="services-three-card services-page-card">
                <div className="services-card d-flex align-items-center">
                  <div className="services-icon">
                    <img src="assets/images/services/home.svg" alt="home" />
                  </div>
                  <h3>
                    <a href="services-details.html">Home Insurance</a>
                  </h3>
                </div>
                <p>
                  Nsectetur adipiscing elit, sed do eiusmod to incididunt ut
                  labore et dolore magna aliqtirt enim ad minim veniam,
                  quisexercitation.
                </p>
                <Link href="/insurers-partners">
                   <span className="default-btn">Read More</span>
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 col-md-6">
              <div className="services-three-card services-page-card">
                <div className="services-card d-flex align-items-center">
                  <div className="services-icon bg-icon-color1">
                    <img src="assets/images/services/heart.svg" alt="heart" />
                  </div>
                  <h3>
                    <a href="services-details.html">Health Insurance</a>
                  </h3>
                </div>
                <p>
                  Nsectetur adipiscing elit, sed do eiusmod to incididunt ut
                  labore et dolore magna aliqtirt enim ad minim veniam,
                  quisexercitation.
                </p>
                <Link href="/insurers-partners">
                   <span className="default-btn">Read More</span>
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 col-md-6">
              <div className="services-three-card services-page-card">
                <div className="services-card d-flex align-items-center">
                  <div className="services-icon bg-icon-color2">
                    <img src="assets/images/services/car.svg" alt="car" />
                  </div>
                  <h3>
                    <a href="services-details.html">Car Insurance</a>
                  </h3>
                </div>
                <p>
                  Nsectetur adipiscing elit, sed do eiusmod to incididunt ut
                  labore et dolore magna aliqtirt enim ad minim veniam,
                  quisexercitation.
                </p>
                <Link href="/insurers-partners">
                   <span className="default-btn">Read More</span>
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 col-md-6">
              <div className="services-three-card services-page-card">
                <div className="services-card d-flex align-items-center">
                  <div className="services-icon bg-icon-color">
                    <img
                      src="assets/images/services/lightbulb.svg"
                      alt="lightbulb"
                    />
                  </div>
                  <h3>
                    <a href="services-details.html">Business Insurance</a>
                  </h3>
                </div>
                <p>
                  Nsectetur adipiscing elit, sed do eiusmod to incididunt ut
                  labore et dolore magna aliqtirt enim ad minim veniam,
                  quisexercitation.
                </p>
                <Link href="/insurers-partners">
                   <span className="default-btn">Read More</span>
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 col-md-6">
              <div className="services-three-card services-page-card">
                <div className="services-card d-flex align-items-center">
                  <div className="services-icon bg-icon-color2">
                    <img
                      src="assets/images/services/services-icon-1.svg"
                      alt="lightbulb"
                    />
                  </div>
                  <h3>
                    <a href="services-details.html">Travel Insurance</a>
                  </h3>
                </div>
                <p>
                  Nsectetur adipiscing elit, sed do eiusmod to incididunt ut
                  labore et dolore magna aliqtirt enim ad minim veniam,
                  quisexercitation.
                </p>
                <Link href="/insurers-partners">
                   <span className="default-btn">Read More</span>
                </Link>
              </div>
            </div>
          </div>
          {/* <div className="pagination-area">
            <a href="services.html" className="prev page-numbers">
              <i className="bx bx-chevron-left"></i>
            </a>

            <span className="page-numbers current" aria-current="page">
              01
            </span>
            <a href="services.html" className="page-numbers">
              02
            </a>
            <a href="services.html" className="page-numbers">
              03
            </a>

            <a href="services.html" className="prev page-numbers">
              <i className="bx bx-chevron-right"></i>
            </a>
          </div> */}
        </div>
      </div>
      <div className="insurance-benefits-area pt-100 pb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="insurance-benefits-img">
                <img
                  src="assets/images/about/1.svg"
                  alt="insurance-benefits"
                />
                <div className="insurance-benefits-shape-1">
                  <img
                    src="assets/images/insurance-benefits-shape-1.webp"
                    alt="insurance-benefits-shape-1"
                  />
                </div>
                <div className="insurance-benefits-shape-2">
                  <img
                    src="assets/images/insurance-benefits-shape-2.webp"
                    alt="insurance-benefits-shape-1"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="single-insurance-benefits-content">
                <div className="section-title left-title">
                  <span className="top-title">Insurance Benefits</span>
                  <h2>We Inspire And Help Our Customers</h2>
                  <p>
                    Dislike men who are so beguiled and demoralized by the
                    charms of pleasureent, sonded by desire, that they cannot
                    foresee the pain and trouble that are bound.
                  </p>
                </div>
                <div className="row">
                  <div className="col-lg-6 col-sm-6 col-md-6">
                    <div className="insurance-benefits-card">
                      <div className="insurance-benefits-text d-flex align-items-center">
                        <span>01</span>
                        <h3>100% Secure Services</h3>
                      </div>
                      <p>
                        Latin words consectetur fror ipsum passage and going
                        throuk.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6 col-sm-6 col-md-6">
                    <div className="insurance-benefits-card">
                      <div className="insurance-benefits-text d-flex align-items-center">
                        <span>02</span>
                        <h3>Anytime Money Back</h3>
                      </div>
                      <p>
                        Latin words consectetur fror ipsum passage and going
                        throuk.
                      </p>
                      <div className="insurance-shape">
                        <img
                          src="assets/images/insurance-benefits-shape-3.webp"
                          alt="insurance"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="features-area pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <span className="top-title">Our Features</span>
            <h2>We Are Award Wining Company</h2>
          </div>
          <div className="row">
            <div className="col-lg-3 col-sm-6 col-md-6">
              <div className="single-features-card">
                <div className="features-icon">
                  <img
                    src="assets/images/features/features-icon-1.svg"
                    alt="features-1"
                  />
                </div>
                <h3>Trustworthy Company</h3>
                <p>
                  Placeat facere assumenda est, omnis dolor repellendus poribus
                  autem.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-md-6">
              <div className="single-features-card bg-color-1">
                <div className="features-icon">
                  <img
                    src="assets/images/features/features-icon-2.svg"
                    alt="features-1"
                  />
                </div>
                <h3>Money Back Guarantee</h3>
                <p>
                  Placeat facere assumenda est, omnis dolor repellendus poribus
                  autem.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-md-6">
              <div className="single-features-card bg-color-2">
                <div className="features-icon">
                  <img
                    src="assets/images/features/features-icon-3.svg"
                    alt="features-1"
                  />
                </div>
                <h3>Awesome Support</h3>
                <p>
                  Placeat facere assumenda est, omnis dolor repellendus poribus
                  autem.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-md-6">
              <div className="single-features-card bg-color-3">
                <div className="features-icon">
                  <img
                    src="assets/images/features/features-icon-4.svg"
                    alt="features-1"
                  />
                </div>
                <h3>Anytime Cancellation</h3>
                <p>
                  Placeat facere assumenda est, omnis dolor repellendus poribus
                  autem.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

//export default Services;

export default withAuth(Services, ['user']);
