import React, { useState, useEffect } from "react";

// import { PRIMARY_COLOR, SECONDARY_COLOR } from "../../styles/constants";
// import { postAPI, retrieveAPI } from "/httpServices";
// import { getSession } from "/customHooks/useSession";
import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import $ from "jquery";

export const Navbar = () => {
  const [search, showSearch] = useState(false);

  useEffect(() => {
    $(window).on("scroll", function () {
      if ($(this).scrollTop() > 100) {
        $(".navbar-area").addClass("is-sticky");
      } else {
        $(".navbar-area").removeClass("is-sticky");
      }
    });
  });

  const handleSearch = () => {
    //   $(".searchbtn").on("click", function() {
    //     $(".search-area").toggleClass("active");
    // });
    // $(".close-searchbox").on("click", function() {
    //     $(".search-area").removeClass("active");
    // });
    showSearch(!search);
  };

  return (
    <>
      <div className="header-style-2">
        <div className="header-area style-2">
          <div className="container-fluid">
            <div className="row justify-content-between align-items-center">
              <div className="col-lg-6 col-sm-3 col-md-6">
                <div className="header-left-bar-text">
                  <div className="top_left">
                    <div className="top_left-languages">
                      <p className="top_left-languages--p active">English</p>
                      <p className="top_left-languages--p">عربي</p>
                    </div>
                    <div>
                      <ul className="list-inline">
                        <li>
                          <a href="https://www.facebook.com/" target="_blank">
                            <i className="bx bxl-facebook"></i>
                          </a>
                        </li>
                        <li>
                          <a href="https://twitter.com/" target="_blank">
                            <i className="bx bxl-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a href="https://www.linkedin.com/" target="_blank">
                            <i className="bx bxl-linkedin"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-sm-9 col-md-6">
                <div className="header-right-content text-end">
                  <ul className="list-inline">
                    <li className="d-inline">
                      <img src="./assets/images/phone.svg" alt="Phone" />
                      <a href="tel:(+0188)7689870859">(+0188) 768 987 0859</a>
                    </li>
                    <li className="d-inline">
                      <img src="./assets/images/email.svg" alt="Email" />
                      <a href="mailto:Info@einaya.com">
                        Info@einaya.com
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="navbar-area">
          <div className="main-responsive-nav">
            <div className="container">
              <div className="main-responsive-menu">
                <div className="logo">
                  <Link href="/" passHref>
                    <img
                      src="./assets/images/logo.svg"
                      className="Navbar_image-img"
                      alt="Logo"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="main-navbar main-navbar-two">
            <div className="container-fluid">
              <nav className="navbar navbar-expand-md navbar-light">
                <Link href="/" passHref>
                  <img
                    src="./assets/images/logo.svg"
                    className="Navbar_image-img"
                    alt="Logo"
                  />
                </Link>

                <div
                  className="collapse navbar-collapse mean-menu"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav ms-auto">
                    <li className="nav-item active">
                      <Link href="/insurers-partners" passHref>
                        <span className="nav-link">Insurers & Partners</span>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/services" passHref>
                        <span className="nav-link">Healthcare Providers</span>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/about" passHref>
                        <span className="nav-link">Insured Members</span>
                      </Link>
                    </li>
                  </ul>

                  <div className="others-options d-flex align-items-center">
                    <div className="option-item">
                      <button
                        className="searchbtn"
                        type="button"
                        onClick={handleSearch}
                      >
                        <i className="bx bx-search"></i>
                      </button>
                    </div>
                    <div className="option-item">
                      <Link href="/login" passHref>
                        <span className="default-btn btn-style-2">Log in</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
          </div>
          <div className="others-option-for-responsive">
            <div className="container">
              <div className="dot-menu">
                <div className="inner">
                  <div className="circle circle-one"></div>
                  <div className="circle circle-two"></div>
                  <div className="circle circle-three"></div>
                </div>
              </div>
              <div className="container">
                <div className="option-inner">
                  <div className="others-options d-flex align-items-center">
                    <div className="option-item">
                      <button className="searchbtn" type="button">
                        <i className="bx bx-search"></i>
                      </button>
                    </div>
                    <div className="option-item">
                      <Link href="/login" passHref>
                        <span className="default-btn btn-style-2">Log in</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {search && (
        <div className="search-area search-active">
          <div className="container">
            <button
              type="button"
              className="close-searchbox"
              onClick={handleSearch}
            >
              <i className="bx bx-x search-area--icon"></i>
            </button>
            <form action="#" className="search-form">
              <div className="form-group">
                <input type="search" placeholder="Search Here" />
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};
