import React from "react";
import Link from "next/link";
import SideBar from "../../components/Sidebar";

const Slider = () => {
  return (
    <>
      {/* start Banner Two Area  */}
      <div className="banner-two-area">
        <div className="">
          <div className="row align-items-center">
            <div className="col-lg-6">
              {/* <div className="single-banner-2-img">
                <img
                  src="./assets/images/banner/slider.webp"
                  alt="banner1"
                />
                <div className="banner-2main">
                  <img
                    src="./assets/images/banner/banner-2-img-1.webp"
                    alt="banner2"
                  />
                </div>
              </div> */}
            </div>
            <div className="col-lg-6">
              <div className="single-banner-two-content">
                <span>Live Your Dream</span>
                <h1>Smart Insurance For Your Better Life</h1>
                <p className="padd-rig">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </p>
                <div className="banner-btn d-flex align-items-center">
                  <Link href="/">
                    <span className="default-btn btn-style-2 text-white">
                      Get Started
                    </span>
                  </Link>
                  <Link href="/contact">
                    <span className="default-btn btn-style">Contact Us</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Banner Two Area  */}
      <SideBar />
    </>
  );
};

export default Slider;
