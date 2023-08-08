import React, { useState, useEffect } from "react";
import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import $ from "jquery";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../redux/features/userSlice";
import { setActiveTabId } from "../../redux/features/tabSlice";
import Spinner from "../../genericComponents/Spinner";

export const Navbar = () => {
  const [search, showSearch] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const router = useRouter();

  useEffect(() => {
    $(window).on("scroll", function () {
      if ($(this).scrollTop() > 100) {
        $(".navbar-area").addClass("is-sticky");
      } else {
        $(".navbar-area").removeClass("is-sticky");
      }
    });
  });

  const logoutHandler = (e) => {
    e.preventDefault();
    localStorage.clear();
    //router.push("/logout");
    window.location.href = "/";
  };

  const handleCardTab = (e) => {
    e.preventDefault();
    dispatch(setActiveTabId(3));
    router.push("/profile");
  };

  const getUser = async () => {
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/v1/users/user-data`,
        {
          token: localStorage.getItem("token"),
        },
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );
      dispatch(setUser(res?.data?.data));
      if (res.data.success) {
        // toast.success("Welcome " + res?.data?.data?.user?.firstName, {
        //   position: "top-right",
        //   autoClose: 5000,
        //   hideProgressBar: false,
        //   closeOnClick: true,
        //   pauseOnHover: true,
        //   draggable: true,
        //   progress: undefined,
        //   theme: "light",
        // });
      } else {
        // toast.error(res?.data?.message, {
        //   position: "top-right",
        //   autoClose: 5000,
        //   hideProgressBar: false,
        //   closeOnClick: true,
        //   pauseOnHover: true,
        //   draggable: true,
        //   progress: undefined,
        //   theme: "light",
        // });
        localStorage.removeItem("token");
        router.push("/login");
      }
    } catch (e) {
      // toast.error("Invalid email or password", {
      //   position: "top-right",
      //   autoClose: 5000,
      //   hideProgressBar: false,
      //   closeOnClick: true,
      //   pauseOnHover: true,
      //   draggable: true,
      //   progress: undefined,
      //   theme: "light",
      // });
    }
  };

  useEffect(() => {
    getUser();

  }, []);

  const handleSearch = () => {
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
                      <a href="mailto:Info@einaya.com">Info@einaya.com</a>
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
              <nav className="navbar navbar-expand-lg navbar-light">
                <Link href="/" passHref>
                  <img
                    src="./assets/images/logo.svg"
                    className="Navbar_image-img"
                    alt="Logo"
                  />
                </Link>
                <button
                  className="navbar-toggler"
                  type="button"
                  id="navbarBtn"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNav"
                  aria-controls="navbarNav"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  {/* <span className="navbar-toggler-icon"></span> */}
                  <i className="bx bx-menu-alt-right"></i>
                </button>
                <div
                  className="collapse navbar-collapse mean-menu"
                  id="navbarNav"
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

                  <div className="others-options d-flex align-items-center to-hide-990">
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
                      <Link
                        href={localStorage.getItem("token") ? "#" : "/login"}
                        passHref
                      >
                        {localStorage.getItem("token") ? (
                          <div className="dropdown">
                            <button
                              className="default-btn btn-style-4 dropdown-toggle"
                              type="button"
                              id="dropdownMenuButton1"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                              style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-around",
                              }}
                            >
                              <img
                                src={`${process.env.NEXT_PUBLIC_API_URL}/${user?.user?.user?.image}`}
                                className="user-image"
                                alt="User"
                              />
                              <span>{user?.user?.user?.firstName || ""}</span>
                            </button>
                            <ul
                              className="dropdown-menu mt-2"
                              aria-labelledby="dropdownMenuButton1"
                            >
                              <li>
                                <Link
                                  className="nav-link py-2 px-2 color-grey"
                                  href="/profile"
                                  passHref
                                >
                                  <span className="dropdown-item nav-link py-2 px-2">
                                    {" "}
                                    My Profile
                                  </span>
                                </Link>
                              </li>
                              <li>
                                <span
                                  className="dropdown-item nav-link py-2 px-2 color-grey"
                                  onClick={handleCardTab}
                                >
                                  {" "}
                                  {/* <Link href="" passHref> */}
                                  My Card
                                  {/* </Link> */}
                                </span>
                              </li>
                              <li>
                                <Link href="" passHref className="color-grey">
                                  <span className="dropdown-item nav-link py-2 px-2">
                                    {" "}
                                    Term & Conditions
                                  </span>
                                </Link>
                              </li>
                              <li>
                                <Link href="" passHref className="color-grey">
                                  <span className="dropdown-item nav-link py-2 px-2">
                                    {" "}
                                    Privacy Policy
                                  </span>
                                </Link>
                              </li>
                              <li>
                                <span
                                  className="dropdown-item nav-link py-2 px-2"
                                  style={{ color: "#DF0000" }}
                                >
                                  <button
                                    className="nav-link py-0 px-0"
                                    type="button"
                                    onClick={logoutHandler}
                                    style={{
                                      color: "#DF0000",
                                      border: "none",
                                      outline: "none",
                                      background: "transparent",
                                    }}
                                  >
                                    Logout
                                  </button>
                                </span>
                              </li>
                            </ul>
                          </div>
                        ) : (
                          <span className="default-btn btn-style-2">
                            Log in
                          </span>
                        )}
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
              <div className="container" id="nav-2">
                <div className="option-inner">
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
      <ToastContainer />
      <Spinner />
    </>
  );
};
