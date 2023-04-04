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

    //   ! function($) {
    //     "use strict";
    //     $.fn.meanmenu = function(e) {
    //         var n = {
    //             meanMenuTarget: $(this),
    //             meanMenuContainer: ".main-responsive-menu",
    //             meanMenuClose: "X",
    //             meanMenuCloseSize: "18px",
    //             meanMenuOpen: "<span /><span /><span />",
    //             meanRevealPosition: "right",
    //             meanRevealPositionDistance: "0",
    //             meanRevealColour: "",
    //             meanScreenWidth: "480",
    //             meanNavPush: "",
    //             meanShowChildren: !0,
    //             meanExpandableChildren: !0,
    //             meanExpand: "+",
    //             meanContract: "-",
    //             meanRemoveAttrs: !1,
    //             onePage: !1,
    //             meanDisplay: "block",
    //             removeElements: ""
    //         };
    //         e = $.extend(n, e);
    //         var a = window.innerWidth || document.documentElement.clientWidth;
    //         return this.each(function() {
    //             var n = e.meanMenuTarget,
    //                 t = e.meanMenuContainer,
    //                 r = e.meanMenuClose,
    //                 i = e.meanMenuCloseSize,
    //                 s = e.meanMenuOpen,
    //                 u = e.meanRevealPosition,
    //                 m = e.meanRevealPositionDistance,
    //                 l = e.meanRevealColour,
    //                 o = e.meanScreenWidth,
    //                 c = e.meanNavPush,
    //                 v = ".meanmenu-reveal",
    //                 h = e.meanShowChildren,
    //                 d = e.meanExpandableChildren,
    //                 y = e.meanExpand,
    //                 j = e.meanContract,
    //                 Q = e.meanRemoveAttrs,
    //                 f = e.onePage,
    //                 g = e.meanDisplay,
    //                 p = e.removeElements,
    //                 C = !1;
    //             (navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/Blackberry/i) || navigator.userAgent.match(/Windows Phone/i)) && (C = !0), (navigator.userAgent.match(/MSIE 8/i) || navigator.userAgent.match(/MSIE 7/i)) && $("html").css("overflow-y", "scroll");
    //             var w = "",
    //                 x = function() {
    //                     if ("center" === u) {
    //                         var e = window.innerWidth || document.documentElement.clientWidth,
    //                             n = e / 2 - 22 + "px";
    //                         w = "left:" + n + ";right:auto;", C ? $(".meanmenu-reveal").animate({
    //                             left: n
    //                         }) : $(".meanmenu-reveal").css("left", n)
    //                     }
    //                 },
    //                 A = !1,
    //                 E = !1;
    //             "right" === u && (w = "right:" + m + ";left:auto;"), "left" === u && (w = "left:" + m + ";right:auto;"), x();
    //             var M = "",
    //                 P = function() {
    //                     M.html($(M).is(".meanmenu-reveal.meanclose") ? r : s)
    //                 },
    //                 W = function() {
    //                     $(".mean-bar,.mean-push").remove(), $(t).removeClass("mean-container"), $(n).css("display", g), A = !1, E = !1, $(p).removeClass("mean-remove")
    //                 },
    //                 b = function() {
    //                     var e = "background:" + l + ";color:" + l + ";" + w;
    //                     if (o >= a) {
    //                         $(p).addClass("mean-remove"), E = !0, $(t).addClass("mean-container"), $(".mean-container").prepend('<div class="mean-bar"><a href="#nav" class="meanmenu-reveal" style="' + e + '">Show Navigation</a><nav class="mean-nav"></nav></div>');
    //                         var r = $(n).html();
    //                         $(".mean-nav").html(r), Q && $("nav.mean-nav ul, nav.mean-nav ul *").each(function() {
    //                             $(this).is(".mean-remove") ? $(this).attr("class", "mean-remove") : $(this).removeAttr("class"), $(this).removeAttr("id")
    //                         }), $(n).before('<div class="mean-push" />'), $(".mean-push").css("margin-top", c), $(n).hide(), $(".meanmenu-reveal").show(), $(v).html(s), M = $(v), $(".mean-nav ul").hide(), h ? d ? ($(".mean-nav ul ul").each(function() {
    //                             $(this).children().length && $(this, "li:first").parent().append('<a class="mean-expand" href="#" style="font-size: ' + i + '">' + y + "</a>")
    //                         }), $(".mean-expand").on("click", function(e) {
    //                             e.preventDefault(), $(this).hasClass("mean-clicked") ? ($(this).text(y), $(this).prev("ul").slideUp(300, function() {})) : ($(this).text(j), $(this).prev("ul").slideDown(300, function() {})), $(this).toggleClass("mean-clicked")
    //                         })) : $(".mean-nav ul ul").show() : $(".mean-nav ul ul").hide(), $(".mean-nav ul li").last().addClass("mean-last"), M.removeClass("meanclose"), $(M).click(function(e) {
    //                             e.preventDefault(), A === !1 ? (M.css("text-align", "center"), M.css("text-indent", "0"), M.css("font-size", i), $(".mean-nav ul:first").slideDown(), A = !0) : ($(".mean-nav ul:first").slideUp(), A = !1), M.toggleClass("meanclose"), P(), $(p).addClass("mean-remove")
    //                         }), f && $(".mean-nav ul > li > a:first-child").on("click", function() {
    //                             $(".mean-nav ul:first").slideUp(), A = !1, $(M).toggleClass("meanclose").html(s)
    //                         })
    //                     } else W()
    //                 };
    //             C || $(window).resize(function() {
    //                 a = window.innerWidth || document.documentElement.clientWidth, a > o, W(), o >= a ? (b(), x()) : W()
    //             }), $(window).resize(function() {
    //                 a = window.innerWidth || document.documentElement.clientWidth, C ? (x(), o >= a ? E === !1 && b() : W()) : (W(), o >= a && (b(), x()))
    //             }), b()
    //         })
    //     }
    // }($);
  });

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
                  class="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNav"
                  aria-controls="navbarNav"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  {/* <span class="navbar-toggler-icon"></span> */}
                  <i class='bx bx-menu-alt-right'></i>
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
