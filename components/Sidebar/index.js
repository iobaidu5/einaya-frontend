import React, { useState, useEffect } from "react";
import Link from "next/link";
import $ from "jquery";
import Menu from "../Menu";

const SideBar = () => {
  // useEffect(() => {

  //   }, []);

  function openSideNav() {
    $("#side-menu").addClass("open-side-nav");
    $("#overlay").addClass("overlay");
  }

  function closeSideNav() {
    $("#side-menu").removeClass("open-side-nav");
    $("#overlay").removeClass("overlay");
  }

  return (
    <>
      <div className="navbar-right">
        <a id="menuButton" onClick={openSideNav} className="menuButton">
          <img src="./assets/images/calendar.svg" />
        </a>
      </div>
      <div id="overlay" className=""></div>
      <div id="side-menu" className="main-side-nav">
        <a id="close-menu" className="menuCloseButton" onClick={closeSideNav}>
          <span id="side-menu-close-text">
            <i className="bx bx-x"></i>
          </span>
          <span className="menu-Close "></span>
        </a>
        <div className="sidebar">
          <div className="sidebar_content">
            <div className="sidebar_content-form">
              <div className="sidebar_content-input">
                <div className="right-inner-addon input-container">
                  <i className="bx bx-search-alt-2 right-inner-addon-icon"></i>
                  <input
                    type="text"
                    name="search-doctor"
                    placeholder="Search By Doctor Name or Specialty or Provider"
                    className="input"
                    style={{
                      width: "100%",
                      height: "100%",
                      margin: "20px 0",
                      background: "#fff",
                      height: "54px",
                    }}
                  />
                </div>
              </div>
              <div className="sidebar_content-input">
                <div className="right-inner-addon input-container">
                  <i className="bx bx-current-location right-inner-addon-icon"></i>
                  <input
                    type="text"
                    name="search-location"
                    placeholder="Location"
                    className="input"
                    style={{
                      width: "100%",
                      height: "100%",
                      margin: "20px 0",
                      background: "#fff",
                      height: "54px",
                    }}
                  />
                </div>
              </div>
              <div className="option-item w-100">
                <Link href="/login" passHref>
                  <span className="default-btn btn-style-2 w-100">Search</span>
                </Link>
              </div>
            </div>
            <div className="sidebar_content-title">
              <h2 className="sidebar_content-title--h2">Specialities</h2>
            </div>
            <div className="sidebar_content-menu">
              <Menu />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
