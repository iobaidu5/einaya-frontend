import React from "react";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer>
      <div className="footer-area pt-100">
        <div className="container">
          <div className="row pb-100">
            <div className="col-lg-3 col-sm-6 col-md-6" data-cue="slideInUp">
              <div className="footer-widget">
                <a href="/home">
                  <img
                    src="./assets/images/logo.svg"
                    className="black-logo"
                    alt="logo"
                  />
                  <img
                    src="./assets/images/logo.svg"
                    className="white-logo"
                    alt="logo"
                  />
                </a>
                <ul className="follow-list">
                  <li>
                    <Link href="https://www.linkedin.com/" passHref>
                      <i className="fab fa-instagram footer-icon"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="https://www.facebook.com/" passHref>
                      <i className="fab fa-facebook-f footer-icon"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="https://twitter.com/" passHref>
                      <i className="fab fa-twitter footer-icon"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-md-6" data-cue="slideInUp">
              <div className="footer-widget footer-widget-link2">
                <h2>About Us</h2>
                <ul className="footer-widget-list">
                  <li>
                    <Link href="/" passHref>
                      <span className="footer-link"><i className="bx bx-chevron-right"></i>Home</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/about" passHref>
                      <span className="footer-link"><i className="bx bx-chevron-right"></i>About Us</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/faq" passHref>
                    <span className="footer-link"><i className="bx bx-chevron-right"></i>Faq</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="" passHref>
                    <span className="footer-link"><i className="bx bx-chevron-right"></i>Blog</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" passHref>
                    <span className="footer-link"><i className="bx bx-chevron-right"></i>Contact Us</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-md-6" data-cue="slideInUp">
              <div className="footer-widget footer-widget-link">
                <h2>Our Services</h2>
                <ul className="footer-widget-list">
                  <li>
                    <Link href="" passHref>
                      <span className="footer-link"><i className="bx bx-chevron-right"></i>Bike Insurance</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="" passHref>
                      <span className="footer-link"><i className="bx bx-chevron-right"></i>Finances Management</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="" passHref>
                      <span className="footer-link"><i className="bx bx-chevron-right"></i>Home Insurance</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="" passHref>
                      <span className="footer-link"><i className="bx bx-chevron-right"></i>Health Insurance</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="" passHref>
                      <span className="footer-link"><i className="bx bx-chevron-right"></i>General Insurance</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-md-6" data-cue="slideInUp">
              <div className="footer-widget">
                <h2>Get In Touch</h2>
                <div className="touch-content">
                  <div className="contact-icon">
                    <img src="./assets/images/contact-phone-2.svg" alt="svg" />
                  </div>
                  <a href="tel:(+0188)768 987 0859">(+0188) 768 987 0859</a>
                </div>
                <div className="touch-content">
                  <div className="contact-icon">
                    <img src="./assets/images/contact-email.svg" alt="svg" />
                  </div>
                  <a href="mailto:Info@einaya.com">Info@einaya.com</a>
                </div>
                <div className="touch-content">
                  <div className="contact-icon">
                    <img src="./assets/images/location-icon.svg" alt="svg" />
                  </div>
                  <p>Khartoum, Sudan</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright-content">
          <div className="d-flex align-items-center justify-content-center">
            <p>
            Designed by {" "}
              <a href="https://hibootstrap.com/" passHref>
                {" "}
                Brainclick
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
