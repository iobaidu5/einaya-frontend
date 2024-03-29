import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Home from "./home";
import $ from "jquery";

const Main = () => {
  const router = useRouter();

  // useEffect(() => {
  //   access_token && company?.id && router.push("/home");
  // }, [access_token, company?.id]);

  useEffect(() => {
    // Others Option For Responsive JS
    $(".others-option-for-responsive .dot-menu").on("click", function () {
      $(".others-option-for-responsive .container .container").toggleClass(
        "active"
      );
    });

    var nav = document.getElementById("navbarNav");
    var nav2 = document.getElementById("nav-2");
    var btn = document.getElementById("navbarBtn");
    nav?.classList?.remove("show");
    btn?.classList?.add("collapsed");
    nav2?.classList?.remove("active");
  });

  return <><Home /></>;
};

export default Main;
